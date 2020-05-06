import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
  next: val => console.log(val),
  error: err => console.warn(err),
  complete: () => console.info('complete')
};

const interval$ = new Observable<number>(subs => {
  var counter = 0;
  const interval = setInterval(() =>{
    subs.next(counter++);
  }, 1000); 


});

const subs1 = interval$.subscribe(observer);
const subs2 = interval$.subscribe(observer);
const subs3 = interval$.subscribe(observer);

subs1.add(subs2).add(subs3);

setTimeout(() => {
  subs1.unsubscribe();
  console.log('complete timeout');
}, 6000);
