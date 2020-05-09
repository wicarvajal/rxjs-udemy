import { ajax, AjaxError } from 'rxjs/ajax';
import { map, pluck, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

const url = 'https://api.github.com/users?per_page=5';

const errorHandler = (err: AjaxError) => {
  console.warn(err.message);
  return of([]);
}

// const fetchPromise = fetch(url);

// fetchPromise
//   .then(errorHandler)
//   .then(resp => resp.json())
//   .then(data => console.log(data))
//   .catch(err => console.warn(err));


ajax(url).pipe(
  pluck('response'),
  catchError(errorHandler)
).subscribe(console.log);