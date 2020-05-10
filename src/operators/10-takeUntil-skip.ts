import { takeUntil, skip, tap } from 'rxjs/operators';
import { fromEvent, interval } from 'rxjs';

const button = document.createElement('button');
button.innerHTML = 'Stop Timer';

document.querySelector('body').append(button);

const counter$ = interval(1000);

// const clickBtn$ = fromEvent(button, 'click');
const clickBtn$ = fromEvent(button, 'click').pipe(
  tap(() => console.log('before skip')),
  skip(2),
  tap(() => console.log('after skip'))
);

counter$.pipe(
  // cuando el obs del argumento emite un valor, se completa el obs
  takeUntil(clickBtn$)
).subscribe({
  next: val => console.log(val),
  complete: () => console.info('complete')
});