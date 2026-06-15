import { Eatable, Swimmable } from './bird.interfaces';

/**
 * El Avestruz: ave terrestre que come y puede nadar, pero NO vuela.
 *
 * ISP aplicado correctamente:
 * ANTES: Implementaba Bird con fly() → throw new Error('NO vuela')
 *        Esto violaba ISP al forzar un método imposible.
 * DESPUÉS: Solo implementa Eatable y Swimmable.
 *          No hay fly() que cause excepciones en tiempo de ejecución.
 */
export class Ostrich implements Eatable, Swimmable {

  eat(): void {
    console.log('El Avestruz come hierbas y semillas en la pradera.');
  }

  swim(): void {
    console.log('El Avestruz cruza arroyos de la reserva cuando es necesario.');
  }
}
