import { of, fromEvent, merge, interval } from 'rxjs';
import { take, pluck } from 'rxjs/operators';

const keyup$ = fromEvent(document, 'keyup');
const click$ = fromEvent(document, 'click');

merge(
  keyup$.pipe(pluck('type')),
  click$.pipe(pluck('type'))
).subscribe(console.log);

// También sirve el siguiente ejemplo
// const interval$ = interval(1000);

// merge(
//   interval$.pipe(take(3)),
//   interval$.pipe(take(2)),
//   [1, 2, 3, 4],
//   of(1)
// ).subscribe(console.log);


