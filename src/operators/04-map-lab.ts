// import { }, fromEvent } from 'rxjs';
// import { }, tap } from 'rxjs/operators';

import { fromEvent } from "rxjs";
import { map, tap } from "rxjs/operators";

const text = document.createElement('div');
text.innerHTML = `
  Mollit amet consectetur qui dolore non anim reprehenderit proident. Est laborum nisi officia deserunt culpa ipsum nostrud quis commodo laboris elit. Tempor veniam tempor non proident eiusmod. Aliqua enim dolore tempor ipsum aliqua enim occaecat fugiat ex minim eu cillum. Sunt mollit et et pariatur fugiat officia et consequat ex sunt Lorem anim. Dolor occaecat do voluptate reprehenderit magna qui ullamco et fugiat elit labore sunt duis. Qui qui et veniam fugiat tempor pariatur pariatur.
  <br/><br/>
  velit aliquip sunt ipsum veniam culpa est Lorem aute excepteur. Laboris tempor cupidatat tempor minim quis excepteur aliqua ex et esse cupidatat aliquip. Sunt ipsum cillum deserunt sit tempor sit ut elit. Esse pariatur dolor minim fugiat. Est id aliquip in consequat ex sit do tempor proident labore. Ex dolore in nostrud ullamco incididunt excepteur mollit eu. Fugiat sunt culpa culpa et quis velit cillum sint excepteur.
  <br/><br/>
  Consectetur excepteur adipisicing ullamco ea. Et id voluptate quis consectetur deserunt Lorem tempor ad. Duis et quis sunt dolore reprehenderit ipsum nulla exercitation cupidatat qui pariatur. Excepteur cupidatat ipsum anim culpa cillum commodo ad aliquip commodo mollit sint pariatur quis deserunt. Sunt nostrud enim enim exercitation laborum labore labore ipsum. In ut dolore adipisicing nulla. Labore officia ut est ipsum sint.
  <br/><br/>
  Consequat cupidatat esse ea sint proident non pariatur cillum tempor. Do veniam dolor pariatur exercitation nostrud adipisicing occaecat ullamco. Id officia ad Lorem amet est ut excepteur minim aute minim Lorem nulla et.
  <br/><br/>
  Voluptate ipsum id incididunt aliqua eu incididunt duis laboris. Excepteur nisi esse proident non id cupidatat. Eiusmod nisi cillum veniam ex occaecat incididunt ex nostrud duis eiusmod cupidatat officia deserunt anim.
  <br/><br/>
  Duis ad reprehenderit aliqua aliquip duis minim anim. Non anim minim et sint est quis dolor laboris exercitation. Fugiat eu sunt ullamco ullamco consequat ea fugiat.
  <br/><br/>
  Quis tempor minim eu pariatur pariatur incididunt non et nostrud. Ea cillum deserunt velit occaecat nostrud sunt occaecat esse veniam in eu nisi. Laborum cillum laborum sit officia adipisicing ex veniam laborum eu elit culpa do. Et velit et sint tempor sunt.
`

const body = document.querySelector('body');
body.append(text);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);

const calcScrollPercent = (event) => {
  const {
    scrollTop,
    scrollHeight,
    clientHeight
  } = event.target.documentElement;

  return ( scrollTop / (scrollHeight - clientHeight)) * 100;

  // console.log(scrollTop, scrollHeight, clientHeight);
}

const scroll$ = fromEvent(document, 'scroll');
// scroll$.subscribe(console.log);

const progress$ = scroll$.pipe(
  // map(event => calcScrollPercent(event))
  map(calcScrollPercent),
  tap(console.log)
);

progress$.subscribe(percent => {
  progressBar.style.width = `${percent}%`;
})
