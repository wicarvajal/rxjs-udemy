import { from } from 'rxjs';
import { filter, reduce, tap } from 'rxjs/operators';

/**
 * Ejercicio: 
 * Sume todos los números del arreglo usando un reduce.
 * Debe de filtrar para que sólo números sean procesados
 * La salida debe de ser 32
 * 
 * Tip:
 * isNan() es una función de JavaScript para determinar si es número
 * Usar filter<any>(...) para no tener problemas de tipado.
 */

(() => {

  const totalReducer = (acc: number, curr:number) => {
      console.log(acc, curr);
      return acc + curr;
  }

  const datos = [1, 2, 'foo', 3, 5, 6, 'bar', 7, 8];

  from(datos).pipe(
    // Trabajar aquí
    filter<any>((val => !isNaN(val) ? val : null)),
    tap(console.log),
    reduce(totalReducer),
  ).subscribe(console.log) // La salida debe de ser 32



})();

