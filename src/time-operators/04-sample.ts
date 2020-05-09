import { sample } from 'rxjs/operators';
import { fromEvent, interval } from 'rxjs';

const click$ = fromEvent<MouseEvent>(document, 'click');
const interval$ = interval(500);

interval$.pipe(
  sample(click$)
).subscribe(console.log);
