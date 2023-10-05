import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './details/details.component';
import {BlogsPageComponent} from "./components/blogs/blogs-page/blogs-page.component";

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page'
  },
  {
    path: 'blogs',
    component: BlogsPageComponent,
    title: 'Blogs '
  }
];

export default routeConfig;
