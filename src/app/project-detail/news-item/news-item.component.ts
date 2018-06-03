import { NewsItem } from './news-item.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mt-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css']
})
export class NewsItemComponent implements OnInit {

  @Input() newsItem: NewsItem

  constructor() { }

  ngOnInit() {
  }

}
