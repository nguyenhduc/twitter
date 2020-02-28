import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TwitterService {
  // small tweak it avoid CORS policy
  private resourceUrl = 'https://cors-anywhere.herokuapp.com/https://anymind-recruitment-python-backend.adasia.biz';

  constructor(private http: HttpClient) { }

  getTweetsByHashtag(hashtag: string): Observable<any> {
    return this.http.get(`${this.resourceUrl}/hashtags/${hashtag}`);
  }

  getTweetsByUser(user: string): Observable<any> {
    return this.http.get(`${this.resourceUrl}/users/${user}`);
  }
}
