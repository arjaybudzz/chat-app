"use server"

import create from "../actions"
import { revalidateTag } from "next/cache"
import { redirect } from "next/navigation"
import { z } from "zod"
import axios from 'axios'
import { cookies } from 'next/headers'

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
    await create({
        username: formData.get("username-input"),
        email: formData.get("email-input"),
        password: formData.get("password-input"),
        password_confirmation: formData.get("password-confirmation-input") 
    }).then((response) => {
        console.log(response);
        revalidateTag("users");
        redirect("/");
    }).catch((errors) => {
        console.log(errors);
    })
}

const login = async(formData: FormData) => {
	await axios.post(`http://127.0.0.1:3001/api/v1/tokens?user[email]=${formData.get("email-input")}&user[password]=${formData.get("password-input")}`)
	.then((response) => {
		cookies().set("userToken", response.data.token);
		cookies().set("userId", response.data.id);
		redirect("/");
	})
	.catch((errors) => {
		console.log(errors);
	})

}

export default register;
export { login };










