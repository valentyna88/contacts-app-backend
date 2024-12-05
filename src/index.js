import { initMongoConnections } from './db/initMongoConnection.js';
import { setupServer } from './server.js';

const bootstrap = async () => {
  await initMongoConnections();
  setupServer();
};
bootstrap();
