import {Component, Input, OnInit} from '@angular/core';
import {Project} from "../../../models/projects.model";
import {BaseModalComponent} from "../../modals/base-modal/base-modal.component";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {

  @Input() project: Project = {} as Project;
  @Input() index: number = 0;
  @Input() float: string = 'none';

  constructor() {
  }

  openProject(): void{
    console.log(this.project.link);
  }

}
