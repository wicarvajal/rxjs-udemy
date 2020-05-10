import { interval, of, forkJoin } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { pluck, catchError } from 'rxjs/operators';

const GITHUB_API_URL = 'https://api.github.com/users';
const GITHUB_USER = 'wicarvajal';

const repos$ = ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}/repos`).pipe(pluck('name'));

forkJoin(
  ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}`),
  ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}/repos`).pipe(
    catchError(err => of([]))
  ),
  ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}/gists`),
).pipe(
  catchError(err => of(err))
).subscribe(console.log);