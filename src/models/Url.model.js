import mongoose from 'mongoose';

const UrlSchema = new mongoose.Schema({
  shortCode: { type: String, unique: true, index: true },
  originalUrl: { type: String, required: true },
  clicks: { type: Number, default: 0 },
  expiresAt: { type: Date },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Url', UrlSchema);