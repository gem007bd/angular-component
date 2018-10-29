import { Component, OnInit, Input } from '@angular/core';
import { BlogPost } from 'src/app/blog-post';

@Component({
  selector: 'app-blog-post-tile',
  templateUrl: './blog-post-tile.component.html',
  styleUrls: ['./blog-post-tile.component.scss']
})
export class BlogPostTileComponent implements OnInit {

 @Input() post: BlogPost;
  constructor() { }

  ngOnInit() {

  }

}
