import { Component, OnInit, ViewChild, QueryList, ViewChildren } from '@angular/core';
import { BlogPost } from 'src/app/blog-post';
import { DataService } from 'src/app/data.service';
import { longStackSupport } from 'q';
import { BlogPostTileComponent } from '../blog-post-tile/blog-post-tile.component';
import { BlogDataService } from 'src/app/services/blog-data.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  blogPosts: BlogPost[][];
  apiPosts: any;
  currentPage: number;
  @ViewChildren('tile') blogPostTileComponets: QueryList<BlogPostTileComponent>;

  constructor(private dataService: DataService, private blogDataService: BlogDataService) {

  }

  ngOnInit() {
    this.currentPage = 0;
    this.blogPosts = this.blogDataService.getData();
     this.apiPosts = this.dataService.getPosts();
  }

  /**
   * update page
   */
  updatePage(newPage) {
    this.currentPage = newPage;
  }

  expandAll() {
    this.blogPostTileComponets
    .forEach(e => e.showFullSummary());
  }

}
