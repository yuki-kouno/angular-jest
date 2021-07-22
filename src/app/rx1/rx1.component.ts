import { Component, OnInit } from '@angular/core';
import {
  asyncScheduler,
  AsyncSubject,
  BehaviorSubject,
  concat,
  defer,
  empty,
  from,
  fromEvent,
  interval,
  Observable,
  of,
  range,
  ReplaySubject,
  Subject,
} from 'rxjs';
import {
  concatAll,
  concatMap,
  map,
  mergeMap,
  multicast,
  observeOn,
  take,
} from 'rxjs/operators';

@Component({
  selector: 'app-rx1',
  templateUrl: './rx1.component.html',
  styleUrls: ['./rx1.component.scss'],
})
export class Rx1Component implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const clicks = fromEvent(document, 'click');
    const result = clicks.pipe(concatMap((ev) => interval(1000).pipe(take(4))));
    result.subscribe((x) => console.log(x));
  }
}
