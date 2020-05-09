import { of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';

// const url = 'https://api.githusdb.com/users?per_page=5';
const url = 'http://httpebin.org/delay/1';

const errorHandler = (err: AjaxError) => {
  console.warn(err.message);
  return of({
    ok: false,
    users: []
  });
}

// const obs$ = ajax.getJSON(url).pipe(
//   catchError(errorHandler)
// );
// const obs2$ = ajax(url).pipe(
//   catchError(errorHandler)
// );

const obs$ = ajax.getJSON(url);
const obs2$ = ajax(url);

obs$.pipe(
  // permite que la subscripcion continue manejando el error,
  // sin llamar el err del obs
  catchError(errorHandler)
).subscribe({
  next: val => console.log(val),
  error: err => console.warn(err),
  complete: () => console.log('complete')
});
// obs2$.subscribe(console.log);