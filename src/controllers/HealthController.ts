import { Request, Response } from "express";
import { inject } from "inversify";
import { controller, httpGet } from "inversify-express-utils";
import { TYPES } from "../config/inversify.config";
import { IHealthService } from "../interfaces/IHealthService";

@controller("/health")
export class HealthController {
    private readonly healthService: IHealthService;

    constructor(@inject(TYPES.IHealthService) healthService: IHealthService) {
        this.healthService = healthService;
    }

    @httpGet("/")
    public healthCheck(req: Request, res: Response) {
        const healthStatus = this.healthService.getHealthStatus();
        return res.json(healthStatus);
    }
}