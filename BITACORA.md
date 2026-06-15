# Bitácora de Refactorización: Principios SOLID

**Proyecto:** Sistema de Gestión de Reserva Ecológica
**Objetivo:** Refactorizar el código base aplicando los 5 principios SOLID, mejorando la arquitectura, mantenibilidad y resiliencia del sistema.

---

## 1. SRP - Single Responsibility Principle (Principio de Responsabilidad Única)

### Problema (Antes)
La clase `ProductBloc` actuaba como una "Clase Dios". Tenía múltiples razones para cambiar: si cambiaba la forma de guardar en base de datos, o si cambiaba el proveedor de correos electrónicos, la misma clase debía modificarse. Esto acoplaba la lógica de negocio/persistencia con la infraestructura (notificaciones).

```typescript
// Violación
export class ProductBloc {
    saveProduct(product: Product) { ... } // Persistencia
    notifyCustomer(email, message) { ... } // Infraestructura
}
```

### Solución (Después)
Se separó en dos clases cohesivas y una interfaz estricta:
- `ProductRepository`: Se encarga única y exclusivamente de la persistencia de productos en el inventario.
- `NotificationService`: Se encarga únicamente del envío de mensajes.
- `Product` (interfaz): Define el contrato de datos.

**Beneficio Arquitectónico:** Alta cohesión. Ahora podemos probar y modificar el servicio de notificaciones sin riesgo de romper el inventario.

---

## 2. OCP - Open/Closed Principle (Principio de Abierto/Cerrado)

### Problema (Antes)
`NewsService` y `PhotosService` dependían directamente de la librería `axios` para hacer peticiones HTTP. Si el equipo decidía migrar a `fetch` nativo (o cualquier otra librería), habría que "abrir" y modificar todas las clases que consumen APIs.

```typescript
// Violación
import axios from 'axios';
async getLatestNews() {
    return await axios.get('...');
}
```

### Solución (Después)
Se introdujo una interfaz `HttpClient` (abstracción). Los servicios ahora reciben esta abstracción por inyección de dependencias. Se creó `FetchHttpClient` como una implementación concreta.
El sistema ahora está **cerrado a modificaciones** (no tocamos `NewsService` para cambiar de librería) pero **abierto a extensión** (creamos nuevas clases que implementen `HttpClient`).

---

## 3. LSP - Liskov Substitution Principle (Principio de Sustitución de Liskov)

### Problema (Antes)
`VehicleManager` conocía las clases concretas (`Tesla`, `Audi`, etc.) y usaba estructuras de control `if (vehicle instanceof X)` para determinar su comportamiento. Las clases no tenían un contrato común. No se podían "sustituir" unas por otras transparentemente.

### Solución (Después)
Se creó la clase abstracta `Vehicle` con el método abstracto `getDetails()`. Todas las marcas ahora extienden `Vehicle`.
`VehicleManager` confía en el polimorfismo. Recibe un arreglo de `Vehicle` y llama a `getDetails()`.

**Resiliencia:** Si la reserva adquiere una nueva marca de vehículos, el `VehicleManager` sigue funcionando perfectamente sin ser modificado.

---

## 4. ISP - Interface Segregation Principle (Principio de Segregación de Interfaces)

### Problema (Antes)
Había una interfaz monolítica `Bird` que obligaba a todas las aves a implementar métodos que biológicamente no les correspondían (ej. `Ostrich.fly()` o `Hummingbird.swim()`), lo que provocaba excepciones en tiempo de ejecución (`throw new Error(...)`).

### Solución (Después)
Se segregó la interfaz gigante en interfaces pequeñas, cohesivas y basadas en roles: `Eatable`, `Flyable`, `Swimmable`.
Ahora el Avestruz solo implementa `Eatable` y `Swimmable`. Se eliminaron las excepciones de tiempo de ejecución derivadas de forzar comportamientos imposibles.

---

## 5. DIP - Dependency Inversion Principle (Principio de Inversión de Dependencias)

### Problema (Antes)
`PostService` (módulo de alto nivel) dependía directamente de `LocalDatabaseService` (módulo de bajo nivel), instanciándolo con `new` internamente.
Estaba fuertemente acoplado; usar una base de datos diferente requería reescribir el servicio.

```typescript
// Violación
const databaseProvider = new LocalDatabaseService();
```

### Solución (Después)
Se invirtieron las dependencias mediante la abstracción `DatabaseProvider`. Ahora `PostService` requiere que se le inyecte un proveedor (Inyección de Dependencias en el constructor). Tanto el servicio como las bases de datos (`LocalDatabaseService`, `JsonDatabaseService`) dependen de la interfaz.

**Impacto en Resiliencia Transaccional:** Al inyectar la dependencia de persistencia, se facilita enormemente la creación de *mocks* para pruebas unitarias y se pueden implementar mecanismos de *fallback* o *circuit breakers* a nivel de la interfaz `DatabaseProvider` sin afectar la lógica de negocio.

---

## Conclusión General
La refactorización transforma un código frágil, acoplado y difícil de testear en una arquitectura modular. Cada pieza tiene un propósito claro, sus dependencias están explícitas a través de contratos (interfaces) y el sistema en su conjunto es resistente a los cambios futuros.
