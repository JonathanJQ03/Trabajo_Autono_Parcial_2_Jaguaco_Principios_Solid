/**
 * Interfaz que define la estructura de una publicación
 * en el sistema de la Reserva Ecológica.
 *
 * Tipado estricto: reemplaza el uso de `any[]` que existía
 * en el PostService original.
 */
export interface Post {
  readonly id: number;
  readonly title: string;
  readonly body: string;
}
