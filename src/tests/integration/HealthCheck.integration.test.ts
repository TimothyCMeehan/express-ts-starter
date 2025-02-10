// src/tests/integration/HealthController.integration.test.ts
import request from 'supertest';
import app from '../../app';

describe("HealthController Integration Test", () => {
    it("should return a valid health check response", async () => {
        const response = await request(app).get('/api/v1/health/');
        
        // Check for a 200 OK status
        expect(response.status).toBe(200);
        
        // Validate the response body. Depending on your real HealthService,
        // adjust these expectations. For example, if you have a production
        // implementation that returns dynamic values, you might use matchers.
        expect(response.body).toHaveProperty("status", "ok");
        expect(response.body).toHaveProperty("timestamp");
        expect(typeof response.body.timestamp).toBe("string");
        expect(response.body).toHaveProperty("uptime");
        expect(typeof response.body.uptime).toBe("number");
        expect(response.body).toHaveProperty("environment");
        expect(typeof response.body.environment).toBe("string");
    });
});