import { buildJsonSchemas } from "fastify-zod";
import { z } from "zod";

const userCore = {
  email: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Email must be a string",
    })
    .email(),
  firstName: z
    .string({
      required_error: "First name is required",
      invalid_type_error: "First name must be a string",
    })
    .min(1),
  lastName: z
    .string({
      required_error: "Last name is required",
      invalid_type_error: "Last name must be a string",
    })
    .min(1),
  role: z.enum(["LandLord", "Tenant", "PropertyManager", "admin"]),
};

const createUserSchema = z.object({
  ...userCore,
  password: z
    .string({
      required_error: "Password is required",
      invalid_type_error: "Password must be a string",
    })
    .min(6),
});

const createUserResponseSchema = z.object({
  id: z.string(),
  ...userCore,
});

export type CreateUserInput = z.infer<typeof createUserSchema>;

export const { schemas: userSchemas, $ref } = buildJsonSchemas({
  createUserSchema,
  createUserResponseSchema,
});
