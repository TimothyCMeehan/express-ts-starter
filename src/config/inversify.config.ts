import { Container } from "inversify";
import { IHealthService } from "../interfaces/IHealthService";
import { HealthService } from "../services/HealthService";

const TYPES = {
    IHealthService: Symbol.for("IHealthService"), // 👈 Define a unique symbol for DI
};

const container = new Container();
container.bind<IHealthService>(TYPES.IHealthService).to(HealthService); // 👈 Bind interface to class

export { container, TYPES };