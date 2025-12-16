import mongoose from 'mongoose';
import { createApp } from './app.js';
import { connectMongo } from './config/mongo.js';
import { port, mongoUri } from './config/env.js';

(async () => {
  await connectMongo(mongoUri);
  const app = createApp();
  
  const server = app.listen(port, () => console.log(`Server running on port ${port}`));
  
  // Graceful shutdown
  process.on('SIGINT', async () => {
    console.log('\nShutting down gracefully...');
    server.close(() => {
      console.log('HTTP server closed');
    });
    
    try {
      await mongoose.connection.close();
      console.log('MongoDB connection closed');
    } catch (error) {
      console.error('Error closing MongoDB:', error.message);
    }
    
    process.exit(0);
  });
})();