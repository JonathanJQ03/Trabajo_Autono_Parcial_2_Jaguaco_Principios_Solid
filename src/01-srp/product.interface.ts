/**
 * Interfaz que define la estructura de un producto
 * en el inventario de la tienda de souvenirs de la Reserva Ecológica.
 *
 * Responsabilidad: Contrato de datos — define QUÉ es un producto,
 * sin acoplar lógica de persistencia ni de presentación.
 */
export interface Product {
  readonly id: number;
  readonly name: string;
}
