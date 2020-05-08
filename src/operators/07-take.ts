import { from, of } from 'rxjs';
import { map, reduce, scan, take, tap } from "rxjs/operators";

const numbers$ = of(1, 2, 3, 4, 5);
// const totalAccum = (accum: number, curr: number) => {
//   return accum + curr;
// }

numbers$.pipe(
  tap(console.log),
  take(3)
).subscribe({
  next: val => console.log(val),
  complete: () => console.log('Complete')
})

