import Fastify from "fastify";
import { FastifyRequest, FastifyReply } from "fastify";
import userRoutes from "./modules/user/user.route";
import { userSchemas } from "./modules/user/user.schema";
import fjwt from "@fastify/jwt";

export const server = Fastify();

server.register(fjwt, {
  secret: "supersecret",
});

declare module "fastify" {
  export interface FastifyInstance {
    authenticate: any;
  }
}

server.decorate(
  "authenticate",
  async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      await request.jwtVerify();
    } catch (e) {
      return reply.send(e);
    }
  }
);

server.get("/healthcheck", async (request, reply) => {
  return { status: "ok" };
});

server.get("/", async () => {
  return {
    message: "Welcome to Ezanapay API",
  };
});

async function main() {
  for (const schema of userSchemas) {
    server.addSchema(schema);
  }

  server.register(userRoutes, { prefix: "api/user" });

  try {
    await server.listen(process.env.PORT || 3000);

    console.log(`Server listening on http://localhost:3000`);
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
}

main();
