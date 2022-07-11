import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private baseUrl: string;
  constructor(private httpClient: HttpClient) { }

  public setBaseUrl(url: string) {
    this.baseUrl = url;
  }

  public getHeadlines() {
    return this.httpClient.get<any>(`${this.baseUrl}/top-headlines?country=pl`);
  }


  public getEverything(q: string, from: string | null, to: string | null, sortBy: string | null) {
    let queryParams = new HttpParams();
    queryParams.append("q", q);

    if(from != null)
      queryParams.append("from", from);

    if(to != null)
      queryParams.append("to", to);

    if(sortBy != null)
      queryParams.append("sortBy", sortBy);

    return this.httpClient.get<any>(`${this.baseUrl}/everything?language=pl`, {params: queryParams});
  }
}
