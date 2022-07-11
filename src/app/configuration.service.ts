import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewsService } from './services/news.service';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {
  public appConfig: any;
  constructor(private http: HttpClient,
    private newsService: NewsService) { }

  public loadConfig() {
    return this.http.get('/assets/config.json')
      .toPromise()
      .then(data => {
        this.appConfig = data;
        this.newsService.setBaseUrl(this.appConfig.baseUrl);
      })
  }
}
