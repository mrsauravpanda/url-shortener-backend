import * as repo from '../repositories/url.repository.js';
import { generateCode } from '../utils/codeGenerator.js';
import { isValidUrl } from '../utils/validator.js';

export async function createShortUrl({ originalUrl, expiryDays }) {
  if (!isValidUrl(originalUrl)) {
    throw new Error('Invalid URL');
  }

  const shortCode = generateCode();
  const expiresAt = expiryDays ? new Date(Date.now() + expiryDays * 86400000) : null;

  return repo.create({ shortCode, originalUrl, expiresAt });
}

export async function resolveShortUrl(shortCode) {
  const url = await repo.findByShortCode(shortCode);
  if (!url) {
    throw new Error('Not found');
  }
  if (url.expiresAt && url.expiresAt < new Date()) {
    throw new Error('Expired');
  }

  url.clicks += 1;
  await url.save();
  return url;
}