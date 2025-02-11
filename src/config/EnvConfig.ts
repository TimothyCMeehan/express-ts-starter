// config/EnvConfig.ts
import dotenv from 'dotenv';
import path from 'path';
import { AppConfig } from './AppConfig';

// If you plan to support multiple .env files based on environment,
// you could uncomment and adjust the following lines:
// const envFile = `.env.${process.env.APP_ENV || 'dev'}`;
// const envPath = path.resolve(__dirname, `../${envFile}`);
// dotenv.config({ path: envPath });

// For simplicity, we load the default .env file (which should be gitignored)
dotenv.config();

const config: AppConfig = {
  PORT: process.env.PORT ? Number(process.env.PORT) : 5000,
  JWT_SECRET: process.env.JWT_SECRET || 'default_jwt_secret', // Ideally, throw an error if missing
  DATABASE_URL: process.env.DATABASE_URL || '',
  LOG_LEVEL: process.env.LOG_LEVEL || 'info',
  APP_ENV: process.env.APP_ENV || 'dev',
};

export default config;