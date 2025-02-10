// middlewares/errorMiddleware.ts
import { Request, Response, NextFunction } from "express";
import logger from '../utils/logger';
import HttpError from "../errors/HttpError";

// Global error-handling middleware
const errorHandler = (err: any, req: Request, res: Response, next: NextFunction): void => {
    const status = err instanceof HttpError ? err.statusCode : 500;
    const message = err.message || "Internal Server Error";
    const details = err instanceof HttpError && err.details ? err.details : undefined;

    // Log error with structured JSON
    // Only log errors if not in test environment
    if (process.env.APP_ENV !== 'test' && status !== 404) {
        logger.error({
            message,
            stack: err.stack,
            method: req.method,
            url: req.url,
            status,
            details,
            timestamp: new Date().toISOString()
        });
    }

    res.status(status).json({
        error: {
            message,
            ...(details && { details }) // Include details if available
        }
    });
};

export default errorHandler;