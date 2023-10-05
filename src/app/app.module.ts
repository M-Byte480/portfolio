import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import {NgOptimizedImage} from "@angular/common";
import { BlogsPageComponent } from './components/blogs/blogs-page/blogs-page.component';
import { BlogComponent } from './components/blogs/blog-component/blog.component';
import {RouterLink, RouterOutlet} from "@angular/router";

@NgModule({
  declarations: [
    HomeComponent,
    MainContentComponent,
    BlogsPageComponent,
    BlogComponent,
  ],
  imports: [
    AppComponent,
    BrowserModule,
    NgOptimizedImage,
    RouterLink,
    RouterOutlet,

  ],
  providers: [],
  // bootstrap: [AppComponent]
})
export class AppModule { }
