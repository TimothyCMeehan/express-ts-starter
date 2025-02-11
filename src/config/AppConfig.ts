// config/AppConfig.ts
export interface AppConfig {
    PORT: number;
    JWT_SECRET: string;
    DATABASE_URL: string;
    LOG_LEVEL: string;
    APP_ENV: string;
  }