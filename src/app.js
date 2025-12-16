import express from 'express';
import registerRoutes from './routes/index.js';

export const createApp = () => {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  registerRoutes(app);
  return app;
};