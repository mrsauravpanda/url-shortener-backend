import { createApp } from './app.js';
import { connectMongo } from './config/mongo.js';
import { port, mongoUri } from './config/env.js';

(async () => {
  await connectMongo(mongoUri);
  const app = createApp();
  app.listen(port, () => console.log(`Server running on port ${port}`));
})();