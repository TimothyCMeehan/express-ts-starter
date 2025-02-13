import ExpressApp from "./app";
import { Server } from "./server";

async function main() {
    const server = new Server(ExpressApp);
    await server.start();
}

main();