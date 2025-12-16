import { shorten } from '../controllers/shorten.controller.js';
import { redirect } from '../controllers/redirect.controller.js';

export default function registerRoutes(app) {
  app.post('/api/shorten', shorten);
  app.get('/:shortCode', redirect);
};