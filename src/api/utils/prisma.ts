import { PrismaClient } from "@prisma/client";
import config from "config";
import log from "./logger";

export const prisma = new PrismaClient();

export async function connect() {
    const _prisma = new PrismaClient();

    const DB_URL = config.get("dbURL");
    try {
        await _prisma.$connect();
        log.info(`🚀  Connected to database at ${DB_URL}`);
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
}

