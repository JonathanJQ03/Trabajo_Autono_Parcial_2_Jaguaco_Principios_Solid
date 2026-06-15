import { Vehicle } from './vehicle.abstract';

export class Audi extends Vehicle {

  getDetails(): string {
    return `Audi Model: ${this.model} — Tracción Quattro activada`;
  }
}
