import { fromEvent, interval, from } from 'rxjs';
import { map, tap, take, reduce, scan } from "rxjs/operators";

const numbers = [1, 2, 3, 4, 5];
// const totalAccum = (accum: number, curr: number) => {
//   return accum + curr;
// }

const totalAccum = (accum: number, curr: number) => accum + curr;

from(numbers).pipe(
  reduce(totalAccum, 0)
).subscribe(console.log);

from(numbers).pipe(
  scan(totalAccum, 0)
).subscribe(console.log);

// redux
interface User {
  id?: string;
  authenticated?: boolean;
  token?: string;
  age?: number;
}

const users: User[] = [
  { id: 'Willy', authenticated: false, token: null },
  { id: 'Willy', authenticated: true, token: 'abc' },
  { id: 'Willy', authenticated: true, token: 'abc123' },
]

const state$ = from(users).pipe(
  scan<User>((acc, curr) => {
    return {...acc, ...curr}
  }, {age: 33})
)

const id$ = state$.pipe(
  map(state => state.id)
)

id$.subscribe(console.log)