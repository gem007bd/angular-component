import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {
  @Input() numberOfPages;
  @Output() pageNumberClick: EventEmitter<number> = new EventEmitter();
  pages: number[];
  constructor() { }

  ngOnInit() {
    this.pages = new Array(this.numberOfPages);
  }

  pageNumberCLicked(pageNumber) {
    this.pageNumberClick.emit(pageNumber);
  }
}
