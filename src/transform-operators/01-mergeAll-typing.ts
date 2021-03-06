import { fromEvent, Observable } from 'rxjs';
import { debounceTime, map, pluck, mergeAll } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { UserItem } from '../interfaces/github-user-item.interface';
import { GithubUsers } from '../interfaces/github-users.interface';

const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');

body.append(textInput, orderList);

const getUsers = (users: UserItem[]) => {
  orderList.innerHTML = '';

  for (const user of users) {
    const li = document.createElement('li');
    const img = document.createElement('img');

    img.src = user.avatar_url;

    const anchor = document.createElement('a');
    anchor.href = user.html_url;
    anchor.text = 'Get page';
    anchor.target = '_blank';

    li.append(img);
    li.append(user.login + ' ');
    li.append(anchor);

    orderList.append(li);

  }
}

const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');

input$.pipe(
  debounceTime<KeyboardEvent>(500),
  pluck<KeyboardEvent, string>('target', 'value'),
  map<string, Observable<GithubUsers>>(text => ajax.getJSON(`https://api.github.com/search/users?q=${text}`)),
  mergeAll<GithubUsers>(),
  pluck<GithubUsers, UserItem[]>('items')
).subscribe(getUsers);



