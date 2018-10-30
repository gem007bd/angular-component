import { Component, OnInit } from '@angular/core';
import { BlogPost } from 'src/app/blog-post';
import { DataService } from 'src/app/data.service';
import { longStackSupport } from 'q';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  blogPosts: BlogPost[][];
  currentPage: number;
  constructor(private dataService: DataService) {

  }

  ngOnInit() {
   // this.blogPosts = this.dataService.getPosts();
   this.currentPage = 0;
   this.blogPosts = [
     [
       {
         title: "Post 1",
         summary: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsu"
       },
       {
         title: "Post 2",
         summary: "lorem imsom"
       },
       {
         title: "Post 3",
         summary: "lorem imsom"
       },
       {
         title: "Post 4",
         summary: "lorem imsom"
       },
       {
         title: "Post 5",
         summary: "lorem imsom"
       },
     ],
     [
       {
         title: "Post 6",
         summary: "lorem imsom"
       },
       {
         title: "Post 7",
         summary: "lorem imsom"
       },
     ],
     [
       {
         title: "Post 8",
         summary: "lorem imsom"
       },
       {
         title: "Post 9",
         summary: "lorem imsom"
       },
     ]
   ];
  }

  updatePage(newPage) {
    console.log("Event emmited and method executed");
    this.currentPage = newPage;
  }
}
