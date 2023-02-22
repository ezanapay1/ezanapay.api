import { Request, Response } from "express"
import { RequestHandler, ParamsDictionary } from "express-serve-static-core"
import { ParsedQs } from "qs"
import { CreateUserInput } from "../../schemas/user.schema"
import sendEmail from "../../utils/mailer"
import { createUser } from "../services/user.service"

export const createUserHandler = async (req: Request<{}, {}, CreateUserInput>, res: Response) => {
    const body = req.body

    try {
        const user = await createUser(body)

        sendEmail({
            from: 'test@gmail.com',
            to: user.email,
            subject: "Please verify your account.",
            text: `Verification code: ${user.verificationCode}. Id ${user.id}`
        })

        return res.send("User successfully created!")
    } catch (e: any) {
        if(e.code === 11000) {
            return res.status(409).send("Account already exists!!")
        }

        return res.status(500).send(e)
    }
}