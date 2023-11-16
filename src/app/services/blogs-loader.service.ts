import { Injectable } from '@angular/core';
import {BlogFiles} from "../models/blogs.model";
import {BlogReference} from "../models/blogs.model";

@Injectable({
  providedIn: 'root'
})
export class BlogsLoaderService {

  private files: string[] = BlogFiles;

  constructor() { }

  loadBlogDetails(): BlogReference[] {
    let blogReferences: BlogReference[] = [];

    this.files.forEach( (file: string): void => {
      const fileStruct: string[] = file.split('.');
      let blogRef: BlogReference = {} as BlogReference;
      blogRef['id'] = fileStruct[0];
      blogRef['fileName'] = fileStruct[1];

      blogReferences.push(blogRef);
    });
    return blogReferences;
  }


}
