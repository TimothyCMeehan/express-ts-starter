// src/tests/integration/ErrorHandling.integration.test.ts
import request from 'supertest';
import app from '../../app';

describe("Fallback Route Error Handling", () => {
  it("should return a 404 error with a 'Not Found' message for a non-existent route", async () => {
    const response = await request(app).get('/api/v1/non-existent-route');

    // Verify that the status code is 404
    expect(response.status).toBe(404);

    // Verify that the error object is present and contains the correct message
    expect(response.body).toHaveProperty('error');
    expect(response.body.error).toHaveProperty('message', 'Not Found');
  });
});