import { Component, OnInit } from '@angular/core';
import {BlogReference} from "../../models/blogs.model";
import {BlogsLoaderService} from "../../services/blogs-loader.service";

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent implements OnInit {
  blogReferences: BlogReference[] = [];

  constructor( private blogLoader: BlogsLoaderService
  ) {
  }

  ngOnInit(): void {
    this.blogReferences = this.blogLoader.loadBlogDetails();
  }

}
