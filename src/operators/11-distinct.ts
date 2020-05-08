import { of, from } from 'rxjs';
import { distinct } from 'rxjs/operators';

const numbers$ = of(1, 1, 1, 2, 2, 3, 4, 5, 3, 1, 5, 6);

numbers$.pipe(
  distinct()
).subscribe(console.log);

interface User {
  name: string;
}

const users: User[] = [
  { name: 'name1' },
  { name: 'name2' },
  { name: 'name3' },
  { name: 'name2' },
  { name: 'name5' },
  { name: 'name6' },
  { name: 'name2' },
  { name: 'name1' },
  { name: 'name9' },
  { name: 'name10' }
];

from(users).pipe(
  distinct(user => user.name)
).subscribe(console.log);


