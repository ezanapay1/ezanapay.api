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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findUsers = exports.findUserByEmail = exports.createUser = void 0;
const hash_1 = require("../../utils/hash");
const prisma_1 = __importDefault(require("../../utils/prisma"));
async function createUser(input) {
    const { password } = input, rest = __rest(input, ["password"]);
    const { hash, salt } = (0, hash_1.hashPassword)(password);
    const user = await prisma_1.default.user.create({
        data: Object.assign(Object.assign({}, rest), { salt, password: hash }),
    });
}
exports.createUser = createUser;
async function findUserByEmail(email) {
    return prisma_1.default.user.findUnique({
        where: { email },
    });
}
exports.findUserByEmail = findUserByEmail;
async function findUsers() {
    return prisma_1.default.user.findMany({
        select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
            role: true,
            createdAt: true,
            updatedAt: true,
        },
    });
}
exports.findUsers = findUsers;
