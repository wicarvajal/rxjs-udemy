import { of, interval, fromEvent } from 'rxjs';
import { mergeMap, take, map, takeUntil } from 'rxjs/operators';

const characters$ = of('a', 'b', 'c');

characters$.pipe(
  mergeMap(char => interval(1000).pipe(
    map(i => char + i),
    take(3)
  ))
)
// .subscribe({
//   next: val => console.log(val),
//   complete: () => console.log('complete')
// })

const mouseDown$ = fromEvent(document, 'mousedown');
const mouseUp$ = fromEvent(document, 'mouseup');
const interval$ = interval();

mouseDown$.pipe(
  // internamente se subscribe a los observables que contiene,
  // retorna la subscripcion ya procesada, NO un observable,
  // evita anidar .subscribes()
  // mantiene todas las subs internas hasta que se completen
  mergeMap(() => interval$.pipe(
    takeUntil(mouseUp$)
  ))
).subscribe({
  next: val => console.log('val', val),
  complete: () => console.log('complete')
});



