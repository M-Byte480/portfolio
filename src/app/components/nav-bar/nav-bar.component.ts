import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{
  currentRoute: string = this.router.url;
  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.changeHighlight();
  }

  changeHighlight(): void{
    setTimeout((): void => {
      this.currentRoute = this.router.url.substring(1);
    }, 100);
  }

}
