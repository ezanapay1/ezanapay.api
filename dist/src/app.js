"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = exports.server = void 0;
const fastify_1 = __importDefault(require("fastify"));
const user_route_1 = __importDefault(require("./modules/user/user.route"));
const user_schema_1 = require("./modules/user/user.schema");
const jwt_1 = __importDefault(require("@fastify/jwt"));
const cors_1 = __importDefault(require("@fastify/cors"));
const serverless_adapter_1 = require("@h4ad/serverless-adapter");
const fastify_2 = require("@h4ad/serverless-adapter/lib/frameworks/fastify");
const default_1 = require("@h4ad/serverless-adapter/lib/handlers/default");
const promise_1 = require("@h4ad/serverless-adapter/lib/resolvers/promise");
const aws_1 = require("@h4ad/serverless-adapter/lib/adapters/aws");
exports.server = (0, fastify_1.default)();
exports.handler = serverless_adapter_1.ServerlessAdapter.new(exports.server)
    .setFramework(new fastify_2.FastifyFramework())
    .setHandler(new default_1.DefaultHandler())
    .setResolver(new promise_1.PromiseResolver())
    .addAdapter(new aws_1.ApiGatewayV2Adapter())
    .build();
exports.server.register(jwt_1.default, {
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
exports.server.register(cors_1.default, {
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    preflightContinue: false,
    optionsSuccessStatus: 204,
});
exports.server.decorate("authenticate", async (request, reply) => {
    try {
        await request.jwtVerify();
    }
    catch (e) {
        return reply.send(e);
    }
});
exports.server.get("/healthcheck", async (request, reply) => {
    return { status: "ok" };
});
async function main() {
    for (const schema of user_schema_1.userSchemas) {
        exports.server.addSchema(schema);
    }
    exports.server.register(user_route_1.default, { prefix: "api/user" });
    try {
        await exports.server.listen({ port: 3000 });
        console.log(`Server listening on http://localhost:3000`);
    }
    catch (e) {
        console.log(e);
        process.exit(1);
    }
}
main();
module.exports = exports.server;
