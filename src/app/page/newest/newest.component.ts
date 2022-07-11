import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-newest',
  templateUrl: './newest.component.html',
  styleUrls: ['./newest.component.css']
})
export class NewestComponent implements OnInit {
  articles: Article[];
  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.newsService.getHeadlines().subscribe(data => {
      this.articles = data;
    });
  }
}
