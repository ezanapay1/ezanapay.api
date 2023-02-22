import express from "express"
import { createUserSchema } from "../../schemas/user.schema";
import { createUserHandler } from "../controllers/user.controller";
import validateResource from "../middlewares/validateResource";

const router = express.Router()

router.post("/user", validateResource(createUserSchema), createUserHandler)

export default router;