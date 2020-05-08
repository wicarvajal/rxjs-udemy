import { first, take, map, takeWhile } from 'rxjs/operators';
import { fromEvent } from "rxjs";

const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
  map(({ x, y }) => ({ x, y })),
  // takeWhile(({ y }) => y <= 150)
  // ultimo argumento bool = incluye el ultimo valor emitido que rompe el predicado
  takeWhile(({ y }) => y <= 150, true)
).subscribe({
  next: val => console.log(val),
  complete: () => console.info('complete')
});
