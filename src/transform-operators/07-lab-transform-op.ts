import { fromEvent, of } from 'rxjs';
import { tap, map, mergeMap, pluck, catchError, switchMap, exhaustMap, concatMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

const loginHttpReq = (userPass) =>
  ajax.post('https://reqres.in/api/login?delay=1', userPass).pipe(
    pluck('response', 'token'),
    catchError(err => of('token no valido'))
  );

// formulario
const body = document.querySelector('body');
const form = document.createElement('form');
const inputEmail = document.createElement('input');
const inputPass = document.createElement('input');
const submitBtn = document.createElement('button');

inputEmail.type = 'email';
inputEmail.placeholder = 'Email';
inputEmail.value = 'eve.holt@reqres.in';

inputPass.type = 'password';
inputPass.placeholder = 'Password';
inputPass.value = 'cityslicka';

form.append(inputEmail, inputPass, submitBtn);
body.append(form);

const submit$ = fromEvent<Event>(form, 'submit').pipe(
  tap(ev => ev.preventDefault()),
  map(ev => ({
    email: ev.target[0].value,
    password: ev.target[1].value
  })),
  // mergeMap(loginHttpReq)
  concatMap(loginHttpReq)
  // exhaustMap(loginHttpReq)
)

submit$.subscribe(console.log);