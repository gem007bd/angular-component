import { Component, OnInit } from '@angular/core';
import { BlogPost } from 'src/app/blog-post';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  blogPosts: BlogPost[] = [];

  constructor() { }

  ngOnInit() {
    this.blogPosts.push(new BlogPost('blog post 1', 'summary detail 1'));
    this.blogPosts.push(new BlogPost('blog post 2', 'summary detail 2'));
  }

}
