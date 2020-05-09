import { debounceTime, pluck, distinctUntilChanged } from 'rxjs/operators';
import { fromEvent } from "rxjs";

const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
  debounceTime(2000)
)//.subscribe({
//   next: val => console.log(val),
//   complete: () => console.info('complete')
// });

const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent<KeyboardEvent>(input, 'keyup');

input$.pipe(
  // emite valor al terminar la cantidad de tiempo especificada en argumento
  debounceTime(1000),
  pluck('target', 'value'),
  // evita enviar 2 veces seguidas el mismo valor
  distinctUntilChanged()
).subscribe(console.log);