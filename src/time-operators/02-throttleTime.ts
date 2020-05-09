import { debounceTime, pluck, distinctUntilChanged, throttleTime } from 'rxjs/operators';
import { fromEvent, asyncScheduler } from "rxjs";

const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
  throttleTime(2000)
)//.subscribe({
//   next: val => console.log(val),
//   complete: () => console.info('complete')
// });

const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent<KeyboardEvent>(input, 'keyup');

input$.pipe(
  // contrario al debounceTime
  // emite valor al comenzar la cantidad de tiempo especificada en argumento
  // se ignoran los valores emitidos hasta que termine el tiempo
  throttleTime(2000, asyncScheduler, {
    leading: true,
    trailing: true
  }),
  pluck('target', 'value'),
  // evita enviar 2 veces seguidas el mismo valor
  distinctUntilChanged()
).subscribe(console.log);