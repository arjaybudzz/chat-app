"use server"

import axios from 'axios'
import { z } from 'zod'
import create from './actions'
import { revalidateTag } from "next/headers"
import { redirect } from "next/navigation"

const User = z.object({
	username: z.string(),
	email: z.string().email(),
	password: z.string(),
	passwordConfirmation: z.string()
}).strict().required().superRefine((val, ctx) => {
	if (val.password !== val.passwordConfirmation) {
		ctx.addIssue({
			message: "Passwords do not match."
		})
	}
});


const register = async (formData: FormData) => {
	User.parse({
		username: formData.get("username-input")?.value,
		email: formData.get("email-input")?.value,
		password: formData.get("password-input")?.value,
		passwordConfirmation: formData.get("password-confirmation-input")?.value
	});

	await create({
		username: formData.get("username-input")?.value,
		email: formData.get("email-input")?.value,
		password: formData.get("password-input")?.value,
		password_confirmation: formData.get("password-confirmation-input")?.value
	}).then((response) => {
		revalidateTag("users");
	}).then(() => redirect("/")).catch((errors) => console.log(errors));
}

export default register;
