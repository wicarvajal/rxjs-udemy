import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
  next: val => console.log(val),
  error: err => console.warn(err),
  complete: () => console.info('complete')
};

const obs$ = new Observable<string>( subs => {

    subs.next('Hola');
    subs.next('Mundo');

    subs.next('Hola');
    subs.next('Mundo');

    subs.complete();

    subs.next('Hola');
    subs.next('Mundo');

});


obs$.subscribe( observer );