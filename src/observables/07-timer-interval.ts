import { interval, timer } from 'rxjs';

const observer = {
  next: val => console.log(val),
  complete: () => console.log('Complete')
};

const todayFiveSeconds = new Date();
todayFiveSeconds.setSeconds(todayFiveSeconds.getSeconds() + 5);

const interval$ = interval(1000);
// const timer$ = timer(2000);
// const timer$ = timer(2000, 1000);
const timer$ = timer(todayFiveSeconds);

console.log('start');

// interval$.subscribe(observer);
timer$.subscribe(observer);

console.log('end');
