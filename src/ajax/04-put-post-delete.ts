import { ajax } from 'rxjs/ajax';

// const url = 'https://api.githusdb.com/users?per_page=5';
const url = 'http://httpbin.org/delay/1';

// get y delete solo headers
// post y put body en segundo argumento

// ajax.post(url, {
//   id: 1,
//   name: 'Willy'
// }, {
//   'token': 'ABC123'
// }).subscribe(console.log);

ajax({
  url,
  method: 'POST',
  headers: {
    token: 'ABC123'
  },
  body: {
    id: 1,
    name: 'Willy'
  }
}).subscribe(console.log);
