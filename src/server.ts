// src/server.ts
import { IAppServer } from "./interfaces/IAppServer";
import config from "./config/EnvConfig"
import logger from './utils/logger';

export class Server {
    private app: IAppServer;
    private serverInstance: any;

    constructor(app: IAppServer) {
        this.app = app;
    }

    async start(): Promise<void> {
        try {

            this.serverInstance = this.app.listen(config.PORT, () => {
                logger.info(`🚀 Server is running on PORT ${config.PORT} in the ${config.APP_ENV} environment`);
            });
    
            // Handle graceful shutdown
            process.on('SIGINT', () => this.stop());
            process.on('SIGTERM', () => this.stop());
    
        } catch (error) {
            logger.error('❌ Server failed to start:', error);
            process.exit(1);
        }

    }

    async stop(): Promise<void> {
        logger.info('⚠️ Shutting down server...');

        try {
            if (this.serverInstance) {
                this.serverInstance.close(() => {
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
}