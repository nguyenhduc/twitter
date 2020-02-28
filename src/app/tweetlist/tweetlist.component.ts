import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-tweetlist',
  templateUrl: './tweetlist.component.html',
  styleUrls: ['./tweetlist.component.scss']
})
export class TweetlistComponent implements OnInit {
  @Input() tweets = [];
  @Input() totalTweet = 0;

  page = 0;
  pageSize = 10;

  constructor() { }

  ngOnInit(): void {
  }
}
