import { Vehicle } from './vehicle.abstract';

export class Ford extends Vehicle {

  getDetails(): string {
    return `Ford Model: ${this.model} — Built Tough`;
  }
}
