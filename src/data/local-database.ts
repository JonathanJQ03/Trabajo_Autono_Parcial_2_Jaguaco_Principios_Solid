import { Post } from '../05-dip/post.interface';
import { DatabaseProvider } from '../05-dip/database-provider.interface';

/**
 * Proveedor de datos local (en memoria) de la Reserva Ecológica.
 *
 * Implementa la interfaz DatabaseProvider, permitiendo que PostService
 * lo use sin conocer su implementación concreta.
 */
export class LocalDatabaseService implements DatabaseProvider {

  async getPosts(): Promise<ReadonlyArray<Post>> {
    return [
      {
        id: 1,
        title: 'Avistamiento de Jaguar',
        body: 'Se reportó un jaguar cerca del río principal de la reserva.',
      },
      {
        id: 2,
        title: 'Nuevas Orquídeas',
        body: 'Han florecido las especies raras en el jardín botánico.',
      },
    ];
  }
}
