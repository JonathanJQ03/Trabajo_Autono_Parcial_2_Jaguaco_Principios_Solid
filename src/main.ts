import './style.css';

// 01-SRP
import { ProductRepository } from './01-srp/product-repository';
import { NotificationService } from './01-srp/notification-service';

// 02-OCP
import { FetchHttpClient } from './02-ocp/fetch-http-client';
import { NewsService } from './02-ocp/news-service';

// 03-LSP
import { Tesla } from './03-lsp/tesla';
import { Toyota } from './03-lsp/toyota';
import { Ford } from './03-lsp/ford';
import { VehicleManager } from './03-lsp/vehicle-manager';

// 04-ISP
import { Toucan } from './04-isp/toucan';
import { Hummingbird } from './04-isp/hummingbird';
import { Ostrich } from './04-isp/ostrich';

// 05-DIP
import { LocalDatabaseService } from './data/local-database';
import { PostService } from './05-dip/post-service';

const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
  <h1>Proyecto SOLID Refactorizado</h1>
  <p>Revisar la consola de JavaScript para ver las demostraciones.</p>
`;

console.log('--- 01 SRP ---');
const repo = new ProductRepository();
repo.save({ id: 1, name: 'Termo Reserva' });
const mailer = new NotificationService();
mailer.sendEmail('turista@mail.com', 'Gracias por su compra');

console.log('\\n--- 02 OCP ---');
const httpClient = new FetchHttpClient();
const news = new NewsService(httpClient);
news.getLatestNews().then(n => console.log('Noticias cargadas:', n.length));

console.log('\\n--- 03 LSP ---');
VehicleManager.printVehicleDetails([
  new Tesla('Model S'),
  new Toyota('Prius'),
  new Ford('F-150')
]);

console.log('\\n--- 04 ISP ---');
const tucan = new Toucan();
tucan.fly();
const avestruz = new Ostrich();
avestruz.swim();

console.log('\\n--- 05 DIP ---');
const dbProvider = new LocalDatabaseService();
const postService = new PostService(dbProvider);
postService.getPosts().then(p => console.log('Posts:', p));
