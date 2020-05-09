import { fromEvent, interval } from 'rxjs';
import { mergeMap, switchMap } from 'rxjs/operators';


const click$ = fromEvent<MouseEvent>(document, 'click');
const interval$ = interval(1000);

click$.pipe(
  // mergeMap mantiene todas las subs internas hasta que se completen
  // switchMap mantiene solo una subscripcion interna activa
  // mergeMap(() => interval$),
  switchMap(() => interval$)
).subscribe(console.log)
