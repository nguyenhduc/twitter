import { Component } from '@angular/core';
import { TwitterService } from './services/twitter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  active = 1;
  mockedTweet =
  {
    "account": {
        "fullname": "Hugo de Vos",
        "href": "/Ottotos",
        "id": 1026921204
    },
    "date": "2019-04-23T06:02:00+07:00",
    "hashtags": [
        "#python", "#ruby", "#node"
    ],
    "likes": 11,
    "replies": 0,
    "retweets": 7,
    "text": "I found a funny, unreadable, unpractical but working  way to do conditional string formatting in #python ? pic.twitter.com/RjUp4XQC4h"
  };

  tweets = [];
  totalTweet = 0;

  constructor(private twitterService: TwitterService) {}

  search(searchInput) {
    let request =  this.active === 1 ? this.twitterService.getTweetsByHashtag(searchInput) : this.twitterService.getTweetsByUser(searchInput);
    request.subscribe((tweets) => {
      if (tweets) this.tweets = tweets;
    })
    // for (var i = 0; i < 25; i++) this.tweets.push(this.mockedTweet);
  }

  onChangeNav() {
    this.tweets = [];
  }
}
