export interface IHealthService {
    getHealthStatus(): {
        status: string;
        timestamp: string;
        uptime: number;
        environment: string;
    };
}