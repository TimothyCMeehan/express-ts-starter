import { HealthController } from "../../../controllers/HealthController";
import { IHealthService } from "../../../interfaces/IHealthService";
import { Request, Response } from "express";

describe("HealthController", () => {
    let healthServiceMock: IHealthService;
    let controller: HealthController;

    beforeEach(() => {
        healthServiceMock = {
            getHealthStatus: jest.fn().mockReturnValue({
                status: "ok",
                timestamp: "mocked-timestamp",
                uptime: 100,
                environment: "test",
            }),
        };

        controller = new HealthController(healthServiceMock);
    });

    it("should return a valid health check response", () => {
        const req = {} as Request;
        const res = { json: jest.fn() } as any;

        controller.healthCheck(req, res);

        expect(res.json).toHaveBeenCalledWith({
            status: "ok",
            timestamp: "mocked-timestamp",
            uptime: 100,
            environment: "test",
        });
    });
});