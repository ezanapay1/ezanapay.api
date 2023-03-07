"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const fastify_1 = __importDefault(require("fastify"));
const user_route_1 = __importDefault(require("./modules/user/user.route"));
const user_schema_1 = require("./modules/user/user.schema");
const jwt_1 = __importDefault(require("@fastify/jwt"));
exports.server = (0, fastify_1.default)();
exports.server.register(jwt_1.default, {
    secret: "supersecret",
});
exports.server.decorate("authenticate", (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield request.jwtVerify();
    }
    catch (e) {
        return reply.send(e);
    }
}));
exports.server.get("/healthcheck", (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
    return { status: "ok" };
}));
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        for (const schema of user_schema_1.userSchemas) {
            exports.server.addSchema(schema);
        }
        exports.server.register(user_route_1.default, { prefix: "api/user" });
        try {
            yield exports.server.listen(process.env.PORT || 3000);
            console.log(`Server listening on http://localhost:3000`);
        }
        catch (e) {
            console.log(e);
            process.exit(1);
        }
    });
}
main();
