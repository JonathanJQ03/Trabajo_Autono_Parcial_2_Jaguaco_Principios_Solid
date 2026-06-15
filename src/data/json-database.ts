import { Post } from '../05-dip/post.interface';
import { DatabaseProvider } from '../05-dip/database-provider.interface';

/**
 * Proveedor de datos JSON de la Reserva Ecológica.
 *
 * Segunda implementación de DatabaseProvider que demuestra
 * cómo DIP permite intercambiar proveedores sin modificar PostService.
 */
export class JsonDatabaseService implements DatabaseProvider {

  async getPosts(): Promise<ReadonlyArray<Post>> {
    return [
      {
        id: 1,
        title: 'Censo de Fauna 2026',
        body: 'Resultados del censo anual cargados desde archivo JSON.',
      },
    ];
  }
}
