import { range, from, fromEvent } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';

const numbers$ = range(1, 5);

numbers$.pipe(
  tap(x => console.log('before', x)),
  map(x => x * 10),
  tap({
    next: x => console.log('after', x),
    complete: () => console.log('tap complete')
  })
).subscribe(val => console.log('subs', val));