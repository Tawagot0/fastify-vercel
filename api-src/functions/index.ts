import {
  FastifyInstance,
  FastifyReply,
  FastifyRequest,
  FastifyServerOptions,
} from "fastify";

export default async function (
  instance: FastifyInstance,
  _opts: FastifyServerOptions,
  done: any
) {
  instance.get("/", async (_req: FastifyRequest, res: FastifyReply) => {
    res.status(200).send({
      message: "Hello world!",
      version: "0.1.0",
    });
  });

  done();
}
