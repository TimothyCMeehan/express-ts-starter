import { Request, Response, NextFunction } from 'express';
import morgan from 'morgan';
import logger from '../utils/logger';

// Define Morgan logging format
const stream = {
    write: (message: string) => logger.info(message.trim()), // Remove extra line breaks from logs
};

// Define request logging middleware using Morgan
const requestLogger = morgan('combined', { stream });

export default requestLogger;