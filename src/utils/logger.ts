import winston from 'winston';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Define log format
const logFormat = winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, level, message }) => {
        return `[${timestamp}] ${level.toUpperCase()}: ${message}`;
    })
);

// Create Winston logger instance
const logger = winston.createLogger({
    level: process.env.LOG_LEVEL || 'info', // Set log level (info, warn, error, etc.)
    format: logFormat,
    transports: [
        new winston.transports.Console(), // Log to console
        new winston.transports.File({ filename: 'logs/error.log', level: 'error' }), // Log errors separately
        new winston.transports.File({ filename: 'logs/combined.log' }) // Log all messages
    ],
});

// Export the logger
export default logger;