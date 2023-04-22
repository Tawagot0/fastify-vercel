import cors from "@fastify/cors";
import Fastify from "fastify";

const app = Fastify({
  logger: true,
});

app.register(cors).register(import("../src/functions/index"));

export default async (req: any, res: any) => {
  await app.ready();
  app.server.emit("request", req, res);
};
