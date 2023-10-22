import { TestBed } from '@angular/core/testing';

import { BlogsLoaderService } from './blogs-loader.service';

describe('BlogsLoaderService', () => {
  let service: BlogsLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogsLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
