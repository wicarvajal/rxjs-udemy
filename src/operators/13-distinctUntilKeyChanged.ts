import { from } from 'rxjs';
import { distinctUntilChanged, distinctUntilKeyChanged } from 'rxjs/operators';

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
  distinctUntilKeyChanged('name')
).subscribe(console.log);


