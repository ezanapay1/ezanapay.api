import {object, string, TypeOf} from "zod"

export const createUserSchema = object({
    body: object({
        firstName: string({
            required_error: "First name is required"
        }),
        lastName: string({
            required_error: "Last name is required"
        }),
        email: string({
            required_error: "Email is required"
        }).email("Not a valid email!"),
        password: string({
            required_error: "Password is required"
        }).min(6, "Password is too short - should be min of 6 characters"),
        confirmPassword: string({
            required_error: "Password confirmation is required"
        }).refine((data) => data.password === data.confirmPassword, {
            message: "Passwords do not match!",
            path: ["confirmPassword"]
        }),
    })
})

export type CreateUserInput = TypeOf<typeof createUserSchema>["body"]