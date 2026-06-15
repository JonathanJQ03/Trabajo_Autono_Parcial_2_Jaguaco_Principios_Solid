/**
 * Interfaz que define el contrato de un cliente HTTP genérico.
 *
 * OCP aplicado: El sistema está ABIERTO a extensión (se puede crear
 * AxiosHttpClient, FetchHttpClient, etc.) y CERRADO a modificación
 * (los servicios que lo consumen no necesitan cambiar).
 *
 * ANTES: NewsService y PhotosService dependían directamente de axios.get().
 * DESPUÉS: Dependen de esta abstracción, permitiendo intercambiar
 *          implementaciones sin tocar el código de los servicios.
 */
export interface HttpClient {
  get<T>(url: string): Promise<T>;
}
