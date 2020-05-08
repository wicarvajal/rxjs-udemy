import { fromEvent, interval } from 'rxjs';
import { map, tap, take, reduce } from "rxjs/operators";

const numbers = [1, 2, 3, 4, 5, 6];
const totalReducer = (accum: number, curr: number) => {
  return accum + curr;
}

const total = numbers.reduce(totalReducer, 0);

console.log(total);

interval(1000).pipe(
  take(4),
  tap(console.log),
  reduce(totalReducer)
).subscribe({
  next: val => console.log(val),
  complete: () => console.info('complete')
})