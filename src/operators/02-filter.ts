import { range, from, fromEvent } from 'rxjs';
import { filter, map } from 'rxjs/operators';

range(1, 10).pipe(
  filter((val, i) => {
    console.log('index', i);
    return val % 2 === 1;
  })
)//.subscribe(console.log);

interface Heros {
  type: string;
  name: string;
}

const heros: Heros[] = [
  {
    type: 'hero',
    name: 'batman'
  },
  {
    type: 'hero',
    name: 'robin'
  },
  {
    type: 'villain',
    name: 'joker'
  }
];

const herosObs$ = from(heros);

herosObs$.pipe(
  filter(hero => hero.type !== 'hero')
).subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
  map(event => event.code),
  filter(key => key === 'Enter')
);

keyup$.subscribe(console.log);