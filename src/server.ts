// src/server.ts
import app from "./app";
import config from "./config/EnvConfig"
import logger from './utils/logger';

app.listen(config.PORT, () => {
    logger.info(`🚀 Server is running on PORT ${config.PORT} in the ${config.APP_ENV} environment`);
});