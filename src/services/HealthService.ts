import { injectable } from "inversify";
import { IHealthService } from "../interfaces/IHealthService";

@injectable()
export class HealthService implements IHealthService{
    public getHealthStatus() {
        return {
            status: "ok",
            timestamp: new Date().toISOString(),
            uptime: process.uptime(),
            environment: process.env.APP_ENV || "undefined",
        };
    }
}