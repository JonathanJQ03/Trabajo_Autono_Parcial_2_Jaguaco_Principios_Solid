import { HttpClient } from './http-client.interface';

/**
 * Implementación concreta del cliente HTTP usando la API nativa `fetch`.
 *
 * Esta clase puede ser reemplazada por AxiosHttpClient, MockHttpClient, etc.
 * sin modificar los servicios que consumen la interfaz HttpClient.
 */
export class FetchHttpClient implements HttpClient {

  async get<T>(url: string): Promise<T> {
    const response: Response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status} - ${response.statusText}`);
    }

    const data: T = await response.json();
    return data;
  }
}
