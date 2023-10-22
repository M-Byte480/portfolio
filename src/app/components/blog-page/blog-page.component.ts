import { Component, OnInit } from '@angular/core';
import { Blog } from "../../models/blogs.model";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent implements OnInit {
  blogs: Blog[] = [];

  constructor(private http: HttpClient) {
    this.loadBlogs();
  }

  ngOnInit(): void {

  }

  loadBlogs(): void {
    this.http.get('assets/blogs/listOfBlogs', {responseType: 'text'})
    .subscribe((data: string): void => {
      data.split('/n').forEach((line: string): void => {
        let blog: Blog = {} as Blog;
        let tokens: string[] = line.split(' : ');

        blog.id = tokens[0];
        blog.title = tokens[1];
        blog.fileName = tokens[2];

        this.blogs.push(blog);
      })
    });
  }


}
