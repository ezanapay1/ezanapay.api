import Fastify from "fastify";
import { FastifyRequest, FastifyReply } from "fastify";
import userRoutes from "./modules/user/user.route";
import { userSchemas } from "./modules/user/user.schema";
import fjwt from "@fastify/jwt";

import cors from "@fastify/cors";

import { ServerlessAdapter } from "@h4ad/serverless-adapter";
import { FastifyFramework } from "@h4ad/serverless-adapter/lib/frameworks/fastify";
import { DefaultHandler } from "@h4ad/serverless-adapter/lib/handlers/default";
import { PromiseResolver } from "@h4ad/serverless-adapter/lib/resolvers/promise";
import { ApiGatewayV2Adapter } from "@h4ad/serverless-adapter/lib/adapters/aws";

export const server = Fastify();

const PORT = process.env.PORT;

require('dotenv').config();

export const handler = ServerlessAdapter.new(server)
  .setFramework(new FastifyFramework())
  .setHandler(new DefaultHandler())
  .setResolver(new PromiseResolver())
  .addAdapter(new ApiGatewayV2Adapter())
  .build();

server.register(fjwt, {
  secret: "supersecret",
});

// const fastify = require("fastify")({
//   logger: {
//     transport: {
//       target: "pino-pretty",
//     },
//     level: "info",
//   },
// });

server.register(cors, {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  preflightContinue: false,
  optionsSuccessStatus: 204,
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

async function main() {
  for (const schema of userSchemas) {
    server.addSchema(schema);
  }

  server.register(userRoutes, { prefix: "api/user" });

  try {
    await server.listen({ 
      port: PORT,
     });

    console.log(`Server listening on http://localhost:${PORT}`);
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
}

main();

module.exports = server
