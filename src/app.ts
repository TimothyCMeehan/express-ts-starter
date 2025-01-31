// src/app.ts
import 'reflect-metadata';
import { InversifyExpressServer } from 'inversify-express-utils';
import express from "express";
import { container } from './config/inversify.config';
import requestLogger from './middlewares/logger.middleware';
import logger from './utils/logger';

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

// Build and export the Express application
const app = server.build();

export default app;