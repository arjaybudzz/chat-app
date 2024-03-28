"use server"

import create from "../actions"
import { revalidateTag } from "next/cache"
import { redirect } from "next/navigation"
import { z } from "zod"

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

const register = async(formData: FormData) => {
    const result = user.parse({
        username: formData.get("username-input"),
        email: formData.get("email-input"),
        password: formData.get("password-input"),
        passwordConfirmation: formData.get("password-confirmation-input")
    })

    await create({
        username: result.username,
        email: result.email,
        password: result.password,
        password_confirmation: result.passwordConfirmation 
    }).then((response) => {
        console.log(response);
        revalidateTag("users");
        redirect("/");
    }).catch((errors) => {
        console.log(errors);
    })
}

export default register;