import {Component, OnInit} from '@angular/core';
import { BlogReference} from "../../../models/blogs.model";
import {Router} from "@angular/router";
import { HttpClient } from '@angular/common/http';
import {BlogsLoaderService} from "../../../services/blogs-loader.service";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit{
  title: string = '';
  html: string = '';
  time: string = '';
  blogReferences: BlogReference[] = [];
  constructor(
    private router: Router,
    private http: HttpClient,
    private blogLoader: BlogsLoaderService
  ) {
  }

  ngOnInit() : void{
    this.blogReferences = this.blogLoader.loadBlogDetails();
    this.processBlog(this.router.url.substring('/blog/'.length));
  }

  processBlog(id: string): void {
    const fileReference: BlogReference = this.blogReferences.find( (blogReference: BlogReference): boolean => {
      return blogReference.id === id;
    })!; // It will never be undefined

    this.http.get(`assets/blogs/${id}.${fileReference.fileName}`, {responseType: 'text'})
    .subscribe((content: string): void => {
      const fileSplit: string[] = content.split(/\r\n\r\n\r\n/);
      const titleAndAuth: string[] = fileSplit[0].split(/\r\n/);
      this.title = titleAndAuth[0];
      this.html = fileSplit[1];

      this.time = titleAndAuth[1];
    });
  }

}
