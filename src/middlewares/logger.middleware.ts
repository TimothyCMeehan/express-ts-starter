import { Request, Response, NextFunction } from 'express';
import morgan from 'morgan';
import config from "../config/EnvConfig";
import logger from '../utils/logger';

/// Custom Morgan token for JSON output
morgan.token('json', (req: Request, res: Response) => {
    return JSON.stringify({
        method: req.method,
        url: req.url,
        status: res.statusCode,
        responseTime: `${res.getHeader('X-Response-Time') || '0'} ms`, // Ensure valid value
        timestamp: new Date().toISOString(),
        env: config.APP_ENV,
    });
});

// Define Morgan logging format with JSON structure
const requestLogger = morgan((tokens, req, res) => {
    return JSON.stringify({
        method: tokens.method(req, res),
        url: tokens.url(req, res),
        status: Number(tokens.status(req, res)), // Ensure it's a number
        responseTime: `${tokens['response-time'](req, res)} ms`, // ✅ Correct way to access response-time
        timestamp: new Date().toISOString(),
        env: config.APP_ENV,
    });
}, {
    stream: {
        write: (message: string) => {
            try {
                logger.info(JSON.parse(message)); // Log structured JSON
            } catch (error) {
                logger.error("Failed to parse Morgan JSON log", { error });
            }
        }
    }
});


export default requestLogger;