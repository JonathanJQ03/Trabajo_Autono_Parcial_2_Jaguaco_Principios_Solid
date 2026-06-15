import { HttpClient } from './http-client.interface';

/**
 * Interfaz que representa una noticia de la reserva biológica.
 */
interface NewsArticle {
  readonly userId: number;
  readonly id: number;
  readonly title: string;
  readonly body: string;
}

/**
 * Servicio de noticias de la Reserva Ecológica.
 *
 * OCP aplicado: Recibe un HttpClient por inyección en el constructor.
 * Si mañana se necesita cambiar de `fetch` a `axios` o a un mock para tests,
 * se inyecta otra implementación SIN modificar esta clase.
 *
 * ANTES: Dependencia directa de `axios.get()` dentro del método.
 * DESPUÉS: Depende de la abstracción `HttpClient`.
 */
export class NewsService {

  constructor(private readonly httpClient: HttpClient) {}

  async getLatestNews(): Promise<ReadonlyArray<NewsArticle>> {
    console.log('Obteniendo noticias de la reserva biológica...');
    return this.httpClient.get<NewsArticle[]>(
      'https://jsonplaceholder.typicode.com/posts'
    );
  }
}
