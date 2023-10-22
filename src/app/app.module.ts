import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NgOptimizedImage } from "@angular/common";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { AppRoutingModule } from './app-routing.module';
import {RouterLink, RouterOutlet} from "@angular/router";
import { BlogPageComponent } from './components/blog-page/blog-page.component';
import { BlogComponent } from './components/blog-page/blog/blog.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    NgOptimizedImage,
    AppRoutingModule,
    RouterOutlet,
    RouterLink,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    BlogPageComponent,
    BlogComponent,
    ProjectsComponent,
    ContactsComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
