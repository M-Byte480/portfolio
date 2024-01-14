import {Component, Input, OnChanges, signal, Signal} from '@angular/core';
import {Project} from "../../../models/projects.model";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnChanges{

  @Input() project: Project = {} as Project;
  isActive: Signal<boolean> = signal(false);
  isOpen: boolean = false;
  showModal : boolean = false;
  isExpanded: boolean = false;
  constructor() {
  }

  ngOnChanges(): void {
    console.log(this.isActive);
  }

  openProject(): void{
    this.isOpen = true;
    this.showModal = true;
    this.isExpanded = true;
  }

  public changeActivity($event: any){
   this.isExpanded = $event;
  }
}
