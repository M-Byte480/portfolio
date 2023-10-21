import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { NgOptimizedImage } from "@angular/common";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { AppRoutingModule } from './app-routing.module';
import {RouterOutlet} from "@angular/router";


@NgModule({
  imports: [
    BrowserModule,
    NgOptimizedImage,
    AppRoutingModule,
    RouterOutlet,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    MainContentComponent,
    NavBarComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
