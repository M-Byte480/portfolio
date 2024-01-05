import {Component, OnInit} from '@angular/core';
import {Project} from "../../models/projects.model";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit{
  projects: Project[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadProjects().then();
    this.projects.forEach( (project: Project) => {
      console.log(project.imageSrc);
    })
  }

  async loadProjects(): Promise<void> {
    // @ts-ignore
    const content: string = await this.http.get('assets/projects/listOfProjects', { responseType: 'text' }).toPromise();
    const lines: string[] = content.split(/\r\n/);

    for (const line of lines) {
      const project: Project = {} as Project;
      const projectDetails: string[] = line.split(';');

      project.title = projectDetails[0];
      project.link = projectDetails[2];
      project.linkText = 'Source Code';

      if (!projectDetails[0]) {
        continue;
      }

      try {
        project.description = await this.getProject(projectDetails[1]);
      } catch (error) {
        console.error(`Failed to fetch description: ${error}`);
      }

      this.projects.push(project);
    }
  }

  private getProject(projectName: string): Promise<string> {
    return new Promise((resolve, reject): void => {
      this.http.get(`assets/projects/descriptions/${projectName}`, { responseType: 'text' })
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
}
