import { first, take, map } from 'rxjs/operators';
import { fromEvent } from "rxjs";

const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
  // Destructuracion de objetos en la asignacion con ({ })
  // map(event => ({
  //   clientX: event.clientX,
  //   clientY: event.clientY
  // })),
  // take(1),
  // Desctructuracion de objetos en argumento y salida
  map<MouseEvent, any>(({ clientX, clientY }) => ({ clientX, clientY })),
  first(event => event.clientY >= 150)
).subscribe({
  next: val => console.log(val),
  complete: () => console.info('complete')
});
