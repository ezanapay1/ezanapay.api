import { prisma } from "../../utils/prisma";
import { User } from "../models/user.model";

export async function createUser(input: Partial<User>) {
    const User = await prisma.user.create({
        data: {
            username: input.username,
            email: input.email ?? '',
            password: input.password ?? '',
            verificationCode: input.verificationCode ?? '',
            resetPasswordCode: input.resetPasswordCode ?? '',
            ...input
        }
    });

    return User;
}