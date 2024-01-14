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
import {MatDialogModule} from "@angular/material/dialog";
import { ButtonComponent } from './components/button/button.component';
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from "@angular/material/table";
import { StrengthBarComponent } from './components/style-components/strength-bar/strength-bar.component';
import { SkillComponent } from './components/style-components/skill/skill.component';
import { ProjectModalComponent } from './components/modals/project-modal/project-modal.component';
@NgModule({
  imports: [
    BrowserModule,
    NgOptimizedImage,
    AppRoutingModule,
    RouterOutlet,
    RouterLink,
    HttpClientModule,
    NoopAnimationsModule,
    MatDialogModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule
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
    ButtonComponent,
    StrengthBarComponent,
    SkillComponent,
    ProjectModalComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
