import {Component, OnInit} from '@angular/core';
import {Project} from "../../models/projects.model";
import {HttpClient} from "@angular/common/http";
import {first} from "rxjs";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  leftProjects: Project[] = [];
  rightProjects: Project[] = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.loadProjects().then(() => {
      this.leftProjects = this.projects.slice(0, this.projects.length / 2);
      this.rightProjects = this.projects.slice(this.projects.length / 2);
    });
    this.projects.forEach((project: Project) => {
    });


  }

  async loadProjects(): Promise<void> {
    // @ts-ignore
    const content: string = await this.http.get('assets/projects/listOfProjects', {responseType: 'text'}).toPromise();
    const lines: string[] = content.split(/\r?\n/);

    for (const line of lines) {
      let project: Project = {} as Project;
      const projectDetails: string[] = line.split(';');

      if (!projectDetails[0]) {
        continue;
      }

      try {
        project.description = await this.getProject(projectDetails[1]);
        // Process Project
        project = this.processProject(project.description);
        project.title = projectDetails[0];
        project.link = projectDetails[2];
        project.linkText = 'Source Code';
        project.imageSrc = `assets/images/projects/${projectDetails[3]}`;
        project.viewHeight = +projectDetails[4];

      } catch (error) {
        console.error(`Failed to fetch description: ${error}`);
      }

      this.projects.push(project);
    }
  }

  private getProject(projectName: string): Promise<string> {
    return new Promise((resolve, reject): void => {
      this.http.get(`assets/projects/descriptions/${projectName}`, {responseType: 'text'})
      .subscribe(
        (content: string) => {
          resolve(content);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  private processProject(content: string): Project {
    const project: Project = {} as Project;
    const lines: string[] = content.split(/\r?\n/);
    const paragraphs = ['', '', ''];
    let paragraph = 0;
    let firstLine;
    let secondLine;
    let textBuffer = '';
    let list = '';
    let ulElements = [];
    let olElements = [];
    let videoSrc = '';
    let description = '';

    for (let i = 0; i < lines.length - 1; i++) {
      firstLine = lines[i];
      secondLine = lines[i + 1];

      if (firstLine === '' && secondLine === '') {
        paragraphs[paragraph] = textBuffer;
        textBuffer = '';
        paragraph++;
      } else if (firstLine === '/ul' || firstLine === '/ol') {
        list = '';
      } else if (list !== '' && firstLine !== '//ul') {
        switch (list) {
          case 'ul':
            ulElements.push(firstLine);
            break;
          case 'ol':
            olElements.push(firstLine);
            break;
        }
      } else if (secondLine === 'ul' || secondLine === 'ol') {
        list = secondLine;
        i++;
      } else if (firstLine === 'video') {
        videoSrc = secondLine;
      } else if (firstLine === 'description') {
        description = secondLine;
        i++;
      } else {
        textBuffer += firstLine;
      }
    }

    project.firstParagraph = paragraphs[0];
    project.secondParagraph = paragraphs[1];
    project.thirdParagraph = paragraphs[2];
    project.ulElements = ulElements;
    project.olElements = olElements;
    project.videoSrc = videoSrc;
    project.description = description;
    return project;
  }
}
