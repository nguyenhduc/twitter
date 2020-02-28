import { Component } from '@angular/core';
import { TwitterService } from './services/twitter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  active = 1;
  tweets = [];
  totalTweet = 0;

  constructor(private twitterService: TwitterService) {}

  search(searchInput) {
    let request =  this.active === 1 ? this.twitterService.getTweetsByHashtag(searchInput) : this.twitterService.getTweetsByUser(searchInput);
    request.subscribe((res) => {
      if (res && !res.error) this.tweets = res.results;
    })
  }

  onChangeNav() {
    this.tweets = [];
  }
}
