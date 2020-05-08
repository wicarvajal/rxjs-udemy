import { asyncScheduler } from 'rxjs';

// setTimeout(() => {}, 3000);
// setInterval(() => {}, 3000);

// const hello = () => console.log('hi world');
const hello = name => console.log(`hi ${name}`);

// asyncScheduler.schedule(hello, 2000);
// asyncScheduler.schedule(hello, 2000, 'Willy');

const subs$ = asyncScheduler.schedule(function (state) {
  console.log(state);
  this.schedule(state + 1, 1000);
}, 2000, 0);

// setTimeout(() => {
//   subs$.unsubscribe();
// }, 6000);

asyncScheduler.schedule(() => subs$.unsubscribe(), 6000);
