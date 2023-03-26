"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsersHandler = exports.loginHandler = exports.registerUserHandler = void 0;
const user_service_1 = require("./user.service");
const hash_1 = require("../../utils/hash");
const app_1 = require("../../app");
async function registerUserHandler(request, reply) {
    const body = request.body;
    try {
        const user = await (0, user_service_1.createUser)(body);
        return reply.code(201).send(user);
    }
    catch (e) {
        return reply.code(500).send(e);
    }
}
exports.registerUserHandler = registerUserHandler;
async function loginHandler(request, reply) {
    const body = request.body;
    // find user by email
    const user = await (0, user_service_1.findUserByEmail)(body.email);
    if (!user) {
        return reply.code(401).send({
            message: "Invalid email or password!",
        });
    }
    // verify password
    const correctPassword = (0, hash_1.verifyPassword)({
        candidatePassword: body.password,
        salt: user.salt,
        hash: user.password,
    });
    if (correctPassword) {
        const { password, salt } = user, rest = __rest(user, ["password", "salt"]);
        // generate access token
        return { accessToken: app_1.server.jwt.sign(rest), user };
    }
    // response
    return reply.code(401).send({
        message: "Invalid email or password!",
    });
}
exports.loginHandler = loginHandler;
async function getUsersHandler() {
    const users = await (0, user_service_1.findUsers)();
    return users;
}
exports.getUsersHandler = getUsersHandler;
