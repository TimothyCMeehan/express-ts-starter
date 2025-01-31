// src/server.ts
import dotenv from "dotenv";
import app from "./app";
import logger from './utils/logger';

dotenv.config();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    logger.info(`🚀 Server is running on PORT ${PORT}`);
});