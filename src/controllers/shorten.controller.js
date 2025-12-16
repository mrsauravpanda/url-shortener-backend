import { createShortUrl } from '../services/url.service.js';
import { baseUrl } from '../config/env.js';

export async function shorten(req, res) {
  try {
    const url = await createShortUrl({ originalUrl: req.body.url, expiryDays: req.body.expiryDays });
    res.status(201).json({ shortUrl: `${baseUrl}/${url.shortCode}` });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};