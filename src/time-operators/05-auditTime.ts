import { auditTime, tap, map } from 'rxjs/operators';
import { fromEvent, interval } from 'rxjs';

const click$ = fromEvent<MouseEvent>(document, 'click');
const interval$ = interval(500);

click$.pipe(
  map(({x}) => ({x})),
  tap(val => console.log('tap', val)),
  // Emite ultimo valor de un observable en un periodo de tiempo en argumento
  auditTime(2000)
).subscribe(console.log);
