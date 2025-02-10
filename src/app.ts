// src/app.ts
import 'reflect-metadata';
import { InversifyExpressServer } from 'inversify-express-utils';
import express from "express";
import { container } from './config/inversify.config';
import requestLogger from './middlewares/logger.middleware';
import errorHandler from "./middlewares/error.middleware";
import HttpError from "./errors/HttpError";

//must import all controllers for them to be registered with the server
import './controllers/HealthController';

// Create a new InversifyExpressServer
const server = new InversifyExpressServer(container, null, { rootPath: "/api/v1" });

// Configure the server
server.setConfig((app) => {
    app.use(express.json());
    // Add any other middleware or configurations here
    app.use(requestLogger);
    
});

server.setErrorConfig((app) => {
    // Fallback route for unmatched endpoints
    app.use((req, res, next) => {
        next(new HttpError(404, "Not Found"));
    });
    app.use(errorHandler); // Attach global error middleware
});

// Build and export the Express application
const app = server.build();

export default app;