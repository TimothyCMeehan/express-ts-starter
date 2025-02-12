import { Container } from "inversify";
import { IHealthService } from "../interfaces/IHealthService";
import { IUserRepository } from "../interfaces/IUserRepository";
import { HealthService } from "../services/HealthService";
import { MongoUserRepository } from "../repositories/mongoUserRepository";

const TYPES = {
    IHealthService: Symbol.for("IHealthService"), // 👈 Define a unique symbol for DI
    IUserRepository: Symbol.for("IUserRepository"),

};

const container = new Container();
container.bind<IHealthService>(TYPES.IHealthService).to(HealthService); // 👈 Bind interface to class
container.bind<IUserRepository>(TYPES.IUserRepository).to(MongoUserRepository);

export { container, TYPES };