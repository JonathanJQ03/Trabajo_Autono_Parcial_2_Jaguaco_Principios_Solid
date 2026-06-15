import { Post } from './post.interface';
import { DatabaseProvider } from './database-provider.interface';

/**
 * Servicio de publicaciones de la Reserva Ecológica.
 *
 * DIP aplicado: Depende de la ABSTRACCIÓN DatabaseProvider,
 * no de la implementación concreta LocalDatabaseService.
 *
 * ANTES:
 *   - Instanciaba `new LocalDatabaseService()` directamente en getPosts().
 *   - Usaba `any[]` sin tipado.
 *   - Imposible cambiar de proveedor sin modificar este archivo.
 *
 * DESPUÉS:
 *   - Recibe DatabaseProvider por inyección en el constructor.
 *   - Tipado estricto con Post[].
 *   - Se puede inyectar Local, JSON, API o Mock sin tocar esta clase.
 */
export class PostService {

  constructor(private readonly databaseProvider: DatabaseProvider) {}

  async getPosts(): Promise<ReadonlyArray<Post>> {
    return this.databaseProvider.getPosts();
  }
}
