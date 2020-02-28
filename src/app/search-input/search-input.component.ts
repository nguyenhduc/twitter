import { Component, OnInit, Input, Output, ElementRef, ViewChild, EventEmitter, OnDestroy } from '@angular/core';
import { TwitterService } from '../services/twitter.service';
import { Subscription, fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit, OnDestroy {
  @ViewChild('inputRef', { static: true }) inputRef: ElementRef;
  private typingSub: Subscription;

  @Input() type: string;
  @Output() searchInput = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    // emits val every 300 after changing input
    this.typingSub = fromEvent(this.inputRef.nativeElement, 'keydown').pipe(
      debounceTime(300),
    ).subscribe((keyboardEvent: any) => {
      const val = keyboardEvent.target.value;
      if (val) this.searchInput.emit(val);
    });
  }

  ngOnDestroy() {
    // performance: kill when not use
    this.typingSub.unsubscribe();
  }

}
