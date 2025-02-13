// src/app.ts
import 'reflect-metadata';
import { InversifyExpressServer } from 'inversify-express-utils';
import express from "express";
import { IAppServer } from './interfaces/IAppServer';
import { container } from './config/inversify.config';
import requestLogger from './middlewares/logger.middleware';
import errorHandler from "./middlewares/error.middleware";
import HttpError from "./errors/HttpError";

//must import all controllers for them to be registered with the server
import './controllers/HealthController';


class  ExpressApp implements IAppServer {
    private server: any;
    private expressApp: express.Application;

    constructor(){
        const  inversifyServer = new InversifyExpressServer(container, null, { rootPath: "/api/v1" });

        // Configure middleware
        inversifyServer.setConfig((app) => {
            app.use(express.json());
            app.use(requestLogger);
            // Add any other middleware or configurations here
    
        });

        inversifyServer.setErrorConfig((app) => {
            // Fallback route for unmatched endpoints
            app.use((req, res, next) => {
                next(new HttpError(404, "Endpoint Not Found"));
            });
            app.use(errorHandler); // Attach global error middleware
        });

        this.expressApp = inversifyServer.build();
    }

    listen(port: number, callback?: () => void) {
        this.server = this.expressApp.listen(port, callback);
        return this.server;
    }

    close(callback?: () => void): void {
        if (this.server) {
            this.server.close(callback);
        }
        
    }
}

export default new ExpressApp();