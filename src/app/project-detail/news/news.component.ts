import { NewsItem } from './../news-item/news-item.model';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ProjectService } from '../../projects/projects.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news: Observable<NewsItem[]>

  constructor(private projectService: ProjectService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.news = this.projectService.newsOfProject(this.route.parent.snapshot.params['id'])
  }

  addLikeNews(item: NewsItem) {
    item.likes++
  }

}
