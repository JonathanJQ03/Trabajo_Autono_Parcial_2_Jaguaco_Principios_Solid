import { Product } from './product.interface';

/**
 * Repositorio de productos de la tienda de souvenirs.
 *
 * Responsabilidad ÚNICA: Gestionar la persistencia de productos
 * (cargar y guardar). No sabe nada de notificaciones ni de UI.
 */
export class ProductRepository {

  private products: Product[] = [];

  /**
   * Busca un producto en el inventario por su identificador.
   * @param id - Identificador numérico del producto.
   * @returns El producto encontrado o `undefined` si no existe.
   */
  findById(id: number): Product | undefined {
    console.log(`Buscando producto con ID: ${id} en el inventario del parque...`);
    return this.products.find(product => product.id === id);
  }

  /**
   * Persiste un nuevo producto en el inventario.
   * @param product - Producto a almacenar.
   */
  save(product: Product): void {
    console.log(`Guardando el producto "${product.name}" en la base de datos de la reserva...`);
    this.products.push(product);
  }

  /**
   * Retorna todos los productos almacenados.
   */
  findAll(): ReadonlyArray<Product> {
    return this.products;
  }
}
