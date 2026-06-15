/**
 * Interfaces segregadas para el catálogo de fauna de la Reserva Ecológica.
 *
 * ISP aplicado: En lugar de una interfaz "gorda" Bird que obliga a TODAS
 * las aves a implementar eat(), fly() y swim(), se separan en interfaces
 * pequeñas y cohesivas. Cada ave implementa SOLO las que le corresponden.
 *
 * ANTES: interface Bird { eat(); fly(); swim(); }
 *   → Ostrich obligado a implementar fly() → throw new Error()
 *   → Hummingbird obligado a implementar swim() → throw new Error()
 *
 * DESPUÉS: Interfaces Eatable, Flyable, Swimmable independientes.
 *   → Cada ave implementa solo las capacidades reales de su especie.
 *   → Cero excepciones en tiempo de ejecución por métodos inválidos.
 */

/** Capacidad de alimentarse — común a todas las aves. */
export interface Eatable {
  eat(): void;
}

/** Capacidad de volar — solo para aves voladoras. */
export interface Flyable {
  fly(): void;
}

/** Capacidad de nadar — solo para aves acuáticas. */
export interface Swimmable {
  swim(): void;
}
