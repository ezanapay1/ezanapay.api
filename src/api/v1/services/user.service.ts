import { prisma } from "../../utils/prisma";
import { User } from "../models/user.model";

export async function createUser(input: Partial<User>) {
    return await prisma.user.create({
        data: {
            ...input
            
        }
    })
}