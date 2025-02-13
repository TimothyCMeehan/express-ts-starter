// src/server.ts
import app from "./app";
import config from "./config/EnvConfig"
import logger from './utils/logger';

let server: any;

async function startServer() {
    try {

        server = app.listen(config.PORT, () => {
            logger.info(`🚀 Server is running on PORT ${config.PORT} in the ${config.APP_ENV} environment`);
        });

        // Handle graceful shutdown
        process.on('SIGINT', stopServer);
        process.on('SIGTERM', stopServer);

    } catch (error) {
        logger.error('❌ Failed to start the server:', error);
        process.exit(1);
    }
}

async function stopServer() {
    logger.info('⚠️ Shutting down server...');

    try {
        if (server) {
            server.close(() => {
                logger.info('✅ HTTP server closed.');
                process.exit(0);
            });
        } else {
            process.exit(0);
        }

        

    } catch (error) {

        logger.error('❌ Error during shutdown:', error);
        process.exit(1);

    }
}

startServer();