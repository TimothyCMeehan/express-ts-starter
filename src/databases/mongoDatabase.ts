import mongoose from 'mongoose';
import { IDatabase } from '../interfaces/IDatabase'
import logger from '../utils/logger';
import config from '../config/EnvConfig';

export class MongoDatabase implements IDatabase {
    public async connect(): Promise<void> {
        try {
            await mongoose.connect(config.DATABASE_URL, {
                // Optional: you can add options here if needed
                // e.g., useNewUrlParser: true, useUnifiedTopology: true
            });
            logger.info('🚀 MongoDB connected successfully!');

        } catch (error) {
            logger.error('❌ MongoDB connection failed:', error);
            throw error;
        }

    }

    public async disconnect(): Promise<void> {
        try {
            await mongoose.disconnect();
            logger.info('👋 MongoDB disconnected successfully.');

        } catch (error) {
            logger.error('❌ Error disconnecting MongoDB:', error);
            throw error;
        }
    }
}