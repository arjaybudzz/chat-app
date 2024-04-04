import TextField from '@mui/material/TextField'
import SubmitButton from "../components/SubmitButton"
import Link from 'next/link'
import { login } from "../api/user"
import axios from 'axios';




export default function Login() {
	


	return (
		<div className="flex justify-center items-center w-screen h-screen">
			<form 
				className="flex flex-col w-1/4 h-3/4 bg-gray-300 shadow-md shadow-black rounded-md p-4 justify-around items-center"
				method='POST'
				action={login}>

				<h1 className="text-4xl font-bold">Login</h1>
				<div className="flex flex-col w-full h-auto gap-4">
					<TextField type="email" required label="Email" name="email-input"/>
					<TextField type="password" required label="Password" name="password-input"/>
				</div>

				<SubmitButton />

				
				<p>Don't have an account? Sign up <Link href="/register" className="text-blue-500">here</Link></p>
			</form>	
		</div>

	)


}
