import { injectable } from "inversify";
import { IHealthService } from "../interfaces/IHealthService";
import config from "../config/EnvConfig"

@injectable()
export class HealthService implements IHealthService{
    public getHealthStatus() {
        return {
            status: "ok",
            timestamp: new Date().toISOString(),
            uptime: process.uptime(),
            environment: config.APP_ENV || "undefined",
        };
    }
}