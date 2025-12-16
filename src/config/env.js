import dotenv from 'dotenv';

dotenv.config();

export const port = process.env.PORT;
export const mongoUri = process.env.MONGO_URI;
export const baseUrl = process.env.BASE_URL;