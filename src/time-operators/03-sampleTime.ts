import { sampleTime, map } from 'rxjs/operators';
import { fromEvent } from "rxjs";

const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
  // emite el ultimo valor de las emisiones ocurridas en el tiempo del argumento
  sampleTime(2000),
  // aconsejable poner map despues, ya que procesa los datos que necesito, no todos
  map(({x, y}) => ({x, y}))
).subscribe({
  next: val => console.log(val),
  complete: () => console.info('complete')
});
