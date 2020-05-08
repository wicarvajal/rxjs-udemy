import { fromEvent } from 'rxjs';

// eventos DOM
const src1$ = fromEvent<MouseEvent>(document, 'click');
const src2$ = fromEvent<KeyboardEvent>(document, 'keyup');

const observer = {
  next: val => console.log(val)
}

// del observer, pasame los parametros con nombre x e y
src1$.subscribe(({ x, y }) => {
  console.log(x);
  console.log(y);
});

src2$.subscribe(event => {
  console.log(event.key);
});
