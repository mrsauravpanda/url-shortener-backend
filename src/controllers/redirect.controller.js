import { resolveShortUrl } from '../services/url.service.js';

export const redirect = async (req, res) => {
  try {
    const url = await resolveShortUrl(req.params.shortCode);
    res.redirect(url.originalUrl);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};