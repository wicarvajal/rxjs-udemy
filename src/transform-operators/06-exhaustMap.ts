import { fromEvent, interval } from 'rxjs';
import { take, exhaustMap } from 'rxjs/operators';

const interval$ = interval(500).pipe(take(3));
const click$ = fromEvent<MouseEvent>(document, 'click');


click$.pipe(
  // ignora la subs del siguiente obs si es que ya hay una subs activa
  // evita efecto spam, por ej cuando teclea muchas vences enter o submit
  // evita llamadas innecesarias completando una antes de enviar otra
  exhaustMap(() => interval$)
).subscribe(console.log)
