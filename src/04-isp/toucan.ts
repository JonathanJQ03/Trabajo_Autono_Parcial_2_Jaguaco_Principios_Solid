import { Eatable, Flyable } from './bird.interfaces';

/**
 * El Tucán: ave tropical que puede comer y volar.
 * NO implementa Swimmable porque los tucanes no nadan.
 */
export class Toucan implements Eatable, Flyable {

  eat(): void {
    console.log('El Tucán está comiendo frutas tropicales.');
  }

  fly(): void {
    console.log('El Tucán vuela sobre la selva de la reserva.');
  }
}
