import { of, from } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

// const numbers$ = of(1, 1, 1, 2, 2, 3, 4, 5, 3, 1, 5, 6);

// numbers$.pipe(
//   // compara el valor actual con el anterior emitido, si es igual, lo ignora
//   distinctUntilChanged()
// ).subscribe(console.log);

interface User {
  name: string;
}

const users: User[] = [
  { name: 'name1' },
  { name: 'name1' },
  { name: 'name3' },
  { name: 'name2' },
  { name: 'name5' },
  { name: 'name6' },
  { name: 'name6' },
  { name: 'name1' },
];

from(users).pipe(
  // compara el valor actual con el anterior emitido, si es igual, lo ignora
  distinctUntilChanged((prev, curr) => prev.name === curr.name)
).subscribe(console.log);


