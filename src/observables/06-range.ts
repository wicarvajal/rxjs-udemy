import { range, asyncScheduler } from 'rxjs';
// crea secuencia de numeros en un rango especifico

const obs$ = range(1, 6, asyncScheduler);

console.log('start');

obs$.subscribe(console.log);

console.log('end');
