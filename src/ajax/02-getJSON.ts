import { ajax } from 'rxjs/ajax';

// const url = 'https://api.githusdb.com/users?per_page=5';
const url = 'http://httpbin.org/delay/1';

const obs$ = ajax.getJSON(url, {
  'Content-Type': 'application/json',
  'token': 'ABC123'
});

obs$.subscribe(console.log);