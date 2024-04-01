"use client";

import { TextField } from '@mui/material'
import SubmitButton from '../components/SubmitButton';
import axios from 'axios';
import { z } from 'zod';
import { redirect } from 'next/navigation';
import { revalidateTag } from 'next/cache';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'


export default function Register() {	
	const user = z.object({
		username: z.string({
			invalid_type_error: "Please enter a string",
			required_error: "Please enter your username."
		}),
		email: z.string({
			invalid_type_error: "Please enter a string",
			required_error: "Please enter your email."

		}).email({
			message: "Invalid email format."
		}),
		password: z.string({
			invalid_type_error: "Please enter a string",
			required_error: "Please enter your password."

		}).min(8, { message: "Your password should have a minimum of 8 characters." })
		.max(20, { message: "Your password should have a maximum of 20 characters." }),
		passwordConfirmation: z.string({
			invalid_type_error: "Please enter a string",
			required_error: "Please confirm your password."
		}).min(8, { message: "Your password should have a minimum of 8 characters." })
		.max(20, { message: "Your password should have a maximum of 20 characters." }),

	})
	.required()
	.strict()
	.superRefine((val, ctx) => {
		if (val.password !== val.passwordConfirmation) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message: "Passwords do not match."
			})

		}
	})

	const { register, handleSubmit, formState: {errors} } = useForm({
		resolver: zodResolver(user) 
	})


	const onSubmit = (data) => console.log(data);

	return (

		<div className="flex justify-center items-center w-screen h-screen">
			<form 
				method='POST' 
				onSubmit={handleSubmit(onSubmit)}	
				className="flex flex-col justify-around items-center shadow-md rounded-xl shadow-black w-1/4 h-3/4 p-6 bg-gray-300">
				<div className="flex w-full h-auto justify-center mb-5 items-center">
					<h1 className="text-4xl font-bold">
						Register	
					</h1>	
				</div>	
				
				<div className="flex flex-col w-full h-full gap-4">
					<TextField 
						{...register("username")} 
						label="Username" 
						type="text" 
						name="username-input" 
						helperText={errors.username?.message} 
						required	
						/>
					<TextField 
						{...register("email")}	
						label="Email" 
						type="email" 
						name="email-input"
						helperText={errors.email?.message} 
						required/>
					<TextField
						{...register("password")} 
						label="Password" 
						type= "password" 
						name="password-input"
						helperText={errors.password?.message} 
						required/>
					<TextField
						{...register("passwordConfirmation")}
						label="Confirm Password" 
						type="password" 
						name="password-confirmation-input"
						helperText={errors.passwordConfirmation?.message} 
						required/>
				</div>

				<SubmitButton />	
			</form>	
		</div>
	);
}
