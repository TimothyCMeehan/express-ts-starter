// src/server.ts
import { IAppServer } from "./interfaces/IAppServer";
import { IDatabase } from "./interfaces/IDatabase";
import config from "./config/EnvConfig"
import logger from './utils/logger';

export class Server {
    private app: IAppServer;
    private database: IDatabase;
    private serverInstance: any;
    private isShuttingDown: boolean = false;

    constructor(app: IAppServer, database: IDatabase) {
        this.app = app;
        this.database = database;
    }

    async start(): Promise<void> {
        try {
            await this.database.connect();
            logger.debug("✅ Database connected successfully.");

            this.serverInstance = this.app.listen(config.PORT, () => {
                logger.info(`🚀 Server is running on PORT ${config.PORT} in the ${config.APP_ENV} environment`);
            });
    
            // Handle graceful shutdown
            process.on('SIGINT', () => this.stop());
            process.on('SIGTERM', () => this.stop());
    
        } catch (error) {
            logger.error('❌ Server failed to start:', error);
            
            setTimeout(() => {
                process.exit(1);
            }, 500);
        }

    }

    async stop(): Promise<void> {
        //ensures stop is only called once
        if (this.isShuttingDown) return;
        this.isShuttingDown = true;

        logger.info('⚠️ Shutting down server...');

        try {
            if (this.serverInstance) {

                await new Promise((resolve, reject) => {
                    this.serverInstance.close((err: any) => {
                        if (err) reject(err);
                        else resolve(true);    
                    });

                });
                logger.info('✅ HTTP server closed.');
                
            }
            await this.database.disconnect();
            logger.debug("✅ Database disconnected.");
            setTimeout(() => {
                process.exit(0);
            }, 500);
        } catch (error) {

            logger.error('❌ Error during shutdown:', error);
            setTimeout(() => {
                process.exit(1);
            }, 500);
        }
    }
}