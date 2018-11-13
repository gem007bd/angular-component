import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { BlogPost } from 'src/app/blog-post';
import { TruncatePipe } from 'src/app/truncate.pipe';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-blog-post-tile',
  templateUrl: './blog-post-tile.component.html',
  styleUrls: ['./blog-post-tile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogPostTileComponent implements OnInit {

 @Input() post: BlogPost;
  fullSummary: string;
  constructor( private truncatePipe: TruncatePipe) { }

  ngOnInit() {
    this.fullSummary = this.post.summary;
    this.post.summary = this.truncatePipe.transform(this.post.summary, 30);
   }
  showFullSummary() {
    this.post.summary = this.fullSummary;
  }

  toggleFav() {
    this.post.isFav = !this.post.isFav;
  }
}
