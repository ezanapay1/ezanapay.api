"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_controller_1 = require("./user.controller");
const user_schema_1 = require("./user.schema");
async function userRoutes(server) {
    server.post("/", {
        schema: {
            body: (0, user_schema_1.$ref)("createUserSchema"),
            response: {
                201: (0, user_schema_1.$ref)("createUserResponseSchema"),
            },
        },
    }, user_controller_1.registerUserHandler);
    server.post("/login", {
        schema: {
            body: (0, user_schema_1.$ref)("loginSchema"),
            response: {
                200: (0, user_schema_1.$ref)("loginResponseSchema"),
            },
        },
    }, user_controller_1.loginHandler);
    server.get("/", {
        preHandler: [server.authenticate]
    }, user_controller_1.getUsersHandler);
}
exports.default = userRoutes;
