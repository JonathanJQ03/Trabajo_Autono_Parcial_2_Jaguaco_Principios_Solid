import { Vehicle } from './vehicle.abstract';

export class Toyota extends Vehicle {

  getDetails(): string {
    return `Toyota Model: ${this.model} — Motor híbrido listo`;
  }
}
