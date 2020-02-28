import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TwitterService {
  private resourceUrl = 'https://anymind-recruitment-python-backend.adasia.biz';

  constructor(private http: HttpClient) { }

  getTweetsByHashtag(hashtag: string): Observable<any> {
    return this.http.get(`${this.resourceUrl}/hashtags/${hashtag}`);
  }

  getTweetsByUser(user: string): Observable<any> {
    return this.http.get(`${this.resourceUrl}/users/${user}`);
  }
}
