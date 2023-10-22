import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Blog} from "../../../models/blogs.model";
import {Router} from "@angular/router";
import { HttpClient } from '@angular/common/http';
import {blogsMapping} from "../../../models/blogs-map.model";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit{
  title: string = '';
  html: string = '';
  blog: Blog = {} as Blog;
  blogsMapping = blogsMapping;
  constructor(
    private router: Router,
    private http: HttpClient
  ) {
  }

  ngOnInit() : void{
    this.processBlog(this.router.url.substring('/blog/'.length))
  }

  processBlogContents(blog: Blog): void{
    const details : string[] = blog.content.split('/n/r/n/r')
    this.title = details[0];
    this.html = details[1];
  }


  processBlog(id: string): void {
    const fileName = blogsMapping.get(id);
    this.http.get(`assets/blogs/${fileName}`, {responseType: 'text'})
    .subscribe((content: string): void => {
      const fileSplit = content.split(/\r\n\r\n\r\n/);
      this.title = fileSplit[0];
      this.html = fileSplit[1];
    });
  }
}
