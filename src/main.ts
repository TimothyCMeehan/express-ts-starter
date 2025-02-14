import { ExpressApp } from "./app";
import { MongoDatabase } from "./databases/mongoDatabase";
import { Server } from "./server";

async function main() {
    const server = new Server(new ExpressApp(), new MongoDatabase());
    await server.start();
}

main();