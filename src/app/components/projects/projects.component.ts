import {Component, OnInit} from '@angular/core';
import {Project} from "../../models/projects.model";
import {BlogReference} from "../../models/blogs.model";
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
    this.loadProjects();
    this.projects.forEach( (project: Project) => {
      console.log(project.imageSrc);
    })
  }


  loadProjects(): void {
    this.http.get(`assets/projects/listOfProjects`, {responseType: 'text'})
    .subscribe((content: string): void => {
      const lines: string[] = content.split(/\r\n/);


      lines.forEach((line: string): void => {
        const project: Project = {} as Project;
        const projectDetails: string[] = line.split(';');

        project['title'] = projectDetails[0];
        project['description'] = projectDetails[1];
        project['link'] = projectDetails[2];
        project['linkText'] = 'Source Code';

        if(!projectDetails[0]){
          return;
        }

        this.projects.push(project);
      });
    });
  }
}
