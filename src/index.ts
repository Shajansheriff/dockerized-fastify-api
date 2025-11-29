import fastify from "fastify";
import { customersRoutes } from "./routes/customers";

const app = fastify();

app.get("/", (_, res) => {
  res.send("Hello World");
});

app.register(customersRoutes);

async function start() {
  try {
    await app.listen({ port: 3000, host: "0.0.0.0" });
    app.log.info(`Server is running on ${app.server.address()}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
}

start();
