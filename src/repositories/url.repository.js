import Url from '../models/Url.model.js';

export const create = async (data) => {
  return Url.create(data);
};

export const findByShortCode = async (shortCode) => {
  return Url.findOne({ shortCode });
};