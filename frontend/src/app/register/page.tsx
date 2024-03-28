import TextField from '@mui/material/TextField'
import register from '../api/user';
import SubmitButton from '../components/SubmitButton';
import { redirect } from "next/navigation"


export default function Register() {	
	
	return (

		<div className="flex justify-center items-center w-screen h-screen">
			<form 
				method='POST' 
				action={register}
				className="flex flex-col justify-around items-center shadow-md rounded-xl shadow-black w-1/4 h-3/4 p-6 bg-gray-300">
				<div className="flex w-full h-auto justify-center mb-5 items-center">
					<h1 className="text-4xl font-bold">
						Register	
					</h1>	
				</div>	
				
				<div className="flex flex-col w-full h-full gap-4">
					<TextField label="Username" type="text" name="username-input" helperText="Please enter username." required/>
					<TextField label="Email" type="email" name="email-input" required/>
					<TextField label="Password" type= "password" name="password-input" required/>
					<TextField label="Confirm Password" type="password" name="password-confirmation-input" required/>
				</div>

				<SubmitButton />	
			</form>	
		</div>
	);
}
