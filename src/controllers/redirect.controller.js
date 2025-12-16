import { resolveShortUrl } from '../services/url.service.js';

export async function redirect(req, res) {
  try {
    const url = await resolveShortUrl(req.params.shortCode);
    res.redirect(url.originalUrl);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};