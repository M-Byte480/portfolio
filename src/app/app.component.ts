import { Component } from '@angular/core';
import {ChildrenOutletContexts} from "@angular/router";
import {fadeAnimation, slideInAnimation} from "./shared/animations";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  animations: [
    fadeAnimation
  ]
})
export class AppComponent {
  title: string = 'Portfolio';

  constructor(private contexts: ChildrenOutletContexts) {}

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }

}
