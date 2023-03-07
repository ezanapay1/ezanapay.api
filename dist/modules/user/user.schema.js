"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.$ref = exports.userSchemas = void 0;
const fastify_zod_1 = require("fastify-zod");
const zod_1 = require("zod");
const userCore = {
    email: zod_1.z
        .string({
        required_error: "Email is required",
        invalid_type_error: "Email must be a string",
    })
        .email(),
    firstName: zod_1.z
        .string({
        required_error: "First name is required",
        invalid_type_error: "First name must be a string",
    })
        .min(1),
    lastName: zod_1.z
        .string({
        required_error: "Last name is required",
        invalid_type_error: "Last name must be a string",
    })
        .min(1),
    role: zod_1.z.enum(["LandLord", "Tenant", "PropertyManager", "admin"]),
};
const createUserSchema = zod_1.z.object(Object.assign(Object.assign({}, userCore), { password: zod_1.z
        .string({
        required_error: "Password is required",
        invalid_type_error: "Password must be a string",
    })
        .min(6) }));
const createUserResponseSchema = zod_1.z.object(Object.assign({ id: zod_1.z.string() }, userCore));
const loginSchema = zod_1.z.object({
    email: zod_1.z
        .string({
        required_error: "Email is required",
        invalid_type_error: "Email must be a string",
    })
        .email(),
    password: zod_1.z
        .string({
        required_error: "Password is required",
        invalid_type_error: "Password must be a string",
    })
        .min(6),
});
const loginResponseSchema = zod_1.z.object({
    accessToken: zod_1.z.string(),
});
_a = (0, fastify_zod_1.buildJsonSchemas)({
    createUserSchema,
    createUserResponseSchema,
    loginSchema,
    loginResponseSchema,
}), exports.userSchemas = _a.schemas, exports.$ref = _a.$ref;
