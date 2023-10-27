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
import { SplitCamelCasePipe } from './pipes/split-camel-case.pipe';
import { ProjectComponent } from './components/projects/project/project.component';
import { BaseModalComponent } from './components/modals/base-modal/base-modal.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserModule,
    NgOptimizedImage,
    AppRoutingModule,
    RouterOutlet,
    RouterLink,
    HttpClientModule,
    NoopAnimationsModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    BlogPageComponent,
    BlogComponent,
    ProjectsComponent,
    ContactsComponent,
    SplitCamelCasePipe,
    ProjectComponent,
    BaseModalComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
