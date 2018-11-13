import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogPostTileComponent } from './components/blog-post-tile/blog-post-tile.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { TruncatePipe } from './truncate.pipe';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { DataService } from './data.service';
import { BlogDataService } from './services/blog-data.service';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    BlogPostTileComponent,
    BlogListComponent,
    TruncatePipe,
    PaginatorComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    TruncatePipe,
    DataService,
    BlogDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
