import { Post } from './post.interface';

/**
 * Interfaz que define el contrato para cualquier proveedor de datos.
 *
 * DIP aplicado: Los módulos de alto nivel (PostService) dependen de esta
 * ABSTRACCIÓN, no de implementaciones concretas (LocalDatabaseService).
 *
 * ANTES: PostService hacía `new LocalDatabaseService()` directamente.
 * DESPUÉS: PostService recibe un DatabaseProvider por constructor.
 *          Se puede inyectar Local, JSON, API, Mock, etc.
 */
export interface DatabaseProvider {
  getPosts(): Promise<ReadonlyArray<Post>>;
}
