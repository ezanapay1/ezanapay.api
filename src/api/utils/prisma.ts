import { PrismaClient } from "@prisma/client";

import config from "config";
import log from "./logger";

const prisma = new PrismaClient();

async function connect() {
    const DB_URL = config.get("dbURL");
    try {
        await prisma.$connect();
        log.info(`🚀  Connected to database at ${DB_URL}`);
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
}

export default connect