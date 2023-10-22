import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {BlogPageComponent} from "./components/blog-page/blog-page.component";
import {ContactsComponent} from "./components/contacts/contacts.component";
import {ProjectsComponent} from "./components/projects/projects.component";
import {BlogComponent} from "./components/blog-page/blog/blog.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'blogs', component: BlogPageComponent},
  { path: 'blog/:id', component: BlogComponent},
  { path: 'contacts', component: ContactsComponent},
  { path: 'projects', component: ProjectsComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),

  ]
})
export class AppRoutingModule { }
