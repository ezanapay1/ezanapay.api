/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { connect } from "./api/utils/prisma";
import log from "./api/utils/logger";

import router from "./api/v1/routes";

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
    process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */

app.use("/api/v1", router);
app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Server Activation
 */

app.listen(PORT, () => {
    log.info(`🚀  API is listening on port ${PORT}`);
    connect()
});

export default app;