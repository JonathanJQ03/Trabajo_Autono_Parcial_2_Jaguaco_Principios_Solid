import { Vehicle } from './vehicle.abstract';

export class Tesla extends Vehicle {

  getDetails(): string {
    return `Tesla Model: ${this.model} — Carga eléctrica al 100%`;
  }
}
