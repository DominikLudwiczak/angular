import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
  public articles: Article[];
  constructor(private newsServive:  NewsService) { }

  ngOnInit(): void {
    this.getData("");
  }

  getData(q: string, from: string | null=null, to: string | null=null, sortBy: string | null=null) {
    this.newsServive.getEverything(q, from, to, sortBy).subscribe(data => {
      this.articles = data;
    });
  }
}
