import { Vehicle } from './vehicle.abstract';

/**
 * Gestor de la flota vehicular de la Reserva Ecológica.
 *
 * LSP aplicado: Este método trabaja con el tipo abstracto `Vehicle[]`.
 * No necesita conocer la marca concreta de cada vehículo.
 * Si mañana se agrega Volvo, Chevrolet o cualquier otra marca,
 * basta con crear una clase que extienda Vehicle — este código NO cambia.
 *
 * ANTES: Cadena de `if (vehicle instanceof X)` para cada marca.
 *        Agregar una marca nueva requería modificar este método.
 * DESPUÉS: Polimorfismo puro con `vehicle.getDetails()`.
 *          Cero conocimiento de las subclases concretas.
 */
export class VehicleManager {

  static printVehicleDetails(vehicles: ReadonlyArray<Vehicle>): void {
    vehicles.forEach(vehicle => {
      console.log(vehicle.getDetails());
    });
  }
}
