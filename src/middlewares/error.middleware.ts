// middlewares/errorMiddleware.ts
import { Request, Response, NextFunction } from "express";
import logger from '../utils/logger';
import HttpError from "../errors/HttpError";

// Global error-handling middleware
const errorHandler = (err: any, req: Request, res: Response, next: NextFunction): void => {
    const status = err instanceof HttpError ? err.statusCode : 500;
    const message = err.message || "Internal Server Error";
    
    // Log error with structured JSON   
    logger.error({
        message,
        stack: err.stack,
        method: req.method,
        url: req.url,
        status,
        details: err instanceof HttpError ? err.details : undefined,
        timestamp: new Date().toISOString()
    });

    // Send a safe response to the client
    res.status(status).json({
        error: { status, message }
    });
};

export default errorHandler;