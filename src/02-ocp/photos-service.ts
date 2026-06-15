import { HttpClient } from './http-client.interface';

/**
 * Interfaz que representa una foto de la galería de la reserva.
 */
interface Photo {
  readonly albumId: number;
  readonly id: number;
  readonly title: string;
  readonly url: string;
  readonly thumbnailUrl: string;
}

/**
 * Servicio de galería fotográfica de la Reserva Ecológica.
 *
 * OCP aplicado: Separado de NewsService (antes estaban acoplados en un solo archivo)
 * y recibe HttpClient por inyección.
 *
 * ANTES: PhotosService estaba en el mismo archivo que NewsService,
 *        ambas con dependencia directa de `axios.get()`.
 * DESPUÉS: Archivo independiente, inyección de HttpClient.
 */
export class PhotosService {

  constructor(private readonly httpClient: HttpClient) {}

  async getGallery(): Promise<ReadonlyArray<Photo>> {
    console.log('Obteniendo galería de fotos de la reserva...');
    return this.httpClient.get<Photo[]>(
      'https://jsonplaceholder.typicode.com/photos'
    );
  }
}
