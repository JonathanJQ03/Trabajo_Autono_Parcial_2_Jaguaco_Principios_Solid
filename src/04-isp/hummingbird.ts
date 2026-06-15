import { Eatable, Flyable } from './bird.interfaces';

/**
 * El Colibrí: ave diminuta que come néctar y vuela rápidamente.
 * NO implementa Swimmable porque los colibríes no nadan.
 *
 * ANTES: Estaba forzado a implementar swim() y lanzaba Error.
 * DESPUÉS: Solo implementa las interfaces que le corresponden.
 */
export class Hummingbird implements Eatable, Flyable {

  eat(): void {
    console.log('El Colibrí busca néctar en las flores de la reserva.');
  }

  fly(): void {
    console.log('El Colibrí aletea rápidamente entre las orquídeas.');
  }
}
