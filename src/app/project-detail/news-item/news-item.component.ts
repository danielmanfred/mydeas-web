import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NewsItem } from './news-item.model';

@Component({
  selector: 'mt-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css']
})
export class NewsItemComponent implements OnInit {  

  @Input() newsItem: NewsItem
  @Output() addLike = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  emitAddEvent() {
    this.addLike.emit(this.newsItem)
  }
}
