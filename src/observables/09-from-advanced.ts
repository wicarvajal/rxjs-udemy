import { of, from } from 'rxjs';

// of toma argumentos y genera secuencia
// from toma array, promise, iterable, observable

const observer = {
  next: val => console.log(val),
  complete: () => console.log('Complete')
};

const myGenerator = function*() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}

const myIterable = myGenerator();

// for (const id of myIterable) {
//   console.log(id);
// }

from(myIterable).subscribe(observer);

// const source$ = of(...[1, 2, 3, 4, 5]);
// const source$ = from([1, 2, 3, 4, 5]);
// const source$ = from('Willy');

const source$ = from(fetch('https://api.github.com/users/klerith'));

// source$.subscribe(async resp => {
//   // console.log(resp);

//   const data = await resp.json();
//   console.log(data);
// });

