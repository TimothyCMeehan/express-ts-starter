import winston from 'winston';
import 'winston-daily-rotate-file';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Define log format
const logFormat = winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
);

// Configure log rotation for combined logs
const combinedRotateTransport = new winston.transports.DailyRotateFile({
    filename: 'logs/combined-%DATE%.log', // Each day's log file will have a unique date
    datePattern: 'YYYY-MM-DD', // Log rotation daily
    zippedArchive: true, // Compress logs older than a day
    maxSize: '10m', // Maximum file size before creating a new log file (10MB)
    maxFiles: '14d', // Keep logs for the last 14 days
});

// Configure log rotation for error logs
const errorRotateTransport = new winston.transports.DailyRotateFile({
    filename: 'logs/error-%DATE%.log',
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    level: 'error', // Only log errors
    maxSize: '5m', // Smaller size for error logs (5MB)
    maxFiles: '30d', // Keep error logs for 30 days
});


// Create Winston logger instance with log rotation
const logger = winston.createLogger({
    level: process.env.LOG_LEVEL || 'info',
    format: logFormat,
    transports: [
        new winston.transports.Console(), // Console logging
        combinedRotateTransport, // Log rotation for all logs
        errorRotateTransport // Log rotation for errors
    ],
});

// Export the logger
export default logger;