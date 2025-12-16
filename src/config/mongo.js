import mongoose from 'mongoose';

export const connectMongo = async (uri) => {
  try {
    await mongoose.connect(uri);
    console.log('MongoDB connected');
  } catch (error) {
    console.warn('MongoDB connection failed:', error.message);
    console.warn('Server will start without database connection');
  }
};