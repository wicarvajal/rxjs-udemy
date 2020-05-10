import { Observable, Observer, Subject } from 'rxjs';
// import desde 'rxjs' contiene solo objetos para crear obs o tipado

const observer: Observer<any> = {
  next: val => console.log(val),
  error: err => console.warn(err),
  complete: () => console.info('complete')
};

const interval$ = new Observable<number>(subs => {
  const intervalID = setInterval(() => {
    subs.next(Math.random());
  }, 1000);

  // el return se ejecuta al llamar el metodo unsubscribe()
  return () => {
    clearInterval(intervalID);
    console.log('interval destoyed');
  }
});

// Casteo multiple (distribuye info a todos los que esten suscritos a el)
// es observer
// next, error, complete
const subject$ = new Subject();

const subs = interval$.subscribe(subject$);

const subj1 = subject$.subscribe(observer);
const subj2 = subject$.subscribe(observer);

setTimeout(() => {
  // puedo editar los valores del subject al ser un obs
  subject$.next(10);
  subject$.complete();
  // la subscripcion puede seguir emitiendo valores 
  // aunque se complete el subject, hasta que se termine la subscripcion
  subs.unsubscribe();
}, 3500);

// const subs1 = interval$.subscribe(rnd => console.log('subs1', rnd));
// const subs2 = interval$.subscribe(rnd => console.log('subs2', rnd));