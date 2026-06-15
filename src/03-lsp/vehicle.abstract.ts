/**
 * Clase abstracta que define el contrato para todos los vehículos
 * de la flota de la Reserva Ecológica.
 *
 * LSP aplicado: Cualquier subclase de Vehicle puede sustituir a Vehicle
 * sin que el código cliente (VehicleManager) cambie su comportamiento.
 *
 * ANTES: Clases Tesla, Audi, etc. eran independientes sin contrato común.
 *        VehicleManager usaba `instanceof` para diferenciarlas.
 * DESPUÉS: Todas extienden Vehicle y proveen su propia implementación
 *          de `getDetails()`, garantizando sustitución transparente.
 */
export abstract class Vehicle {

  constructor(public readonly model: string) {}

  /**
   * Retorna los detalles específicos del vehículo.
   * Cada subclase implementa su propia versión.
   */
  abstract getDetails(): string;
}
