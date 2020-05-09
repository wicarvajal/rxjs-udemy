import { fromEvent, interval } from 'rxjs';
import { mergeMap, switchMap, take, concatMap } from 'rxjs/operators';

const interval$ = interval(500).pipe(take(3));
const click$ = fromEvent<MouseEvent>(document, 'click');


click$.pipe(
  // comienza la subs del siguiente obs al completar el anterior
  // se ejecutan en secuencia
  concatMap(() => interval$)
).subscribe(console.log)
