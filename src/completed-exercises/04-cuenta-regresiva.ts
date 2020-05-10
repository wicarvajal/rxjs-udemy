import { interval } from 'rxjs';
import { take, map, takeUntil, takeWhile } from 'rxjs/operators';

/**
 * Ejercicio: Realizar una cuenta regresiva
 * empezando de 7
 */

// Salida esperada ===
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0

(() => {

  const inicio = 7;
  const countdown$ = interval(700).pipe(
    map(numb => inicio - numb),
    take(inicio + 1)
    // Usar los operadores necesarios
    // para realizar la cuenta regresiva
  );


  // No tocar esta línea ==================
  countdown$.subscribe(console.log); // =
  // ======================================


})();

