import { Vehicle } from './vehicle.abstract';

export class Honda extends Vehicle {

  getDetails(): string {
    return `Honda Model: ${this.model} — VTEC activado`;
  }
}
