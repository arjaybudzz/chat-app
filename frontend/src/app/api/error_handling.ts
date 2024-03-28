import { parse } from 'path';
import { ZodIssue, z } from 'zod'


const user = z.object({
    username: z.string({
        invalid_type_error: "Please enter a string",
        required_error: "Please enter your username"
    }),
    email: z.string({
        invalid_type_error: "Please enter a string",
        required_error: "Please enter your email"
    }).email({
        message: "Invalid email format."
    }),
    password: z.string({
        invalid_type_error: "Please enter a string",
        required_error: "Please enter your password"
    })
    .min(8, {message: "A password must have at least 8 characters long."})
    .max(20, {message: "A password must not exceed 20 characters"}),
    passwordConfirmation: z.string({
        invalid_type_error: "Please enter a string",
        required_error: "Please confirm your password."
    })
})
.required()
.strict()
.superRefine((val, ctx) => {
    if (val.password !== val.passwordConfirmation) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Passwords do not match.",
        })
    }
})

const parseData = (data: {[key: string]: any}) => {
    const result = user.safeParse(data);
    return result.success? {} : result.error.format();
}

export default parseData;