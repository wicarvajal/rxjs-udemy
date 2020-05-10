import { interval, of, forkJoin } from 'rxjs';
import { take, delay } from 'rxjs/operators';

const numbers$ = of(1, 2, 3, 4);
const interval$ = interval(1000).pipe(take(3));
const characters$ = of('a', 'b', 'c').pipe(delay(3500));

// forkJoin(
//   numbers$,
//   interval$,
//   characters$
// ).subscribe(console.log);

forkJoin({
  num: numbers$,
  int: interval$,
  char: characters$
}).subscribe(resp => {
  console.log(resp);
});