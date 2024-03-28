import TextField from '@mui/material/TextField'

export default function Register() {
	return (

		<div className="flex justify-center items-center w-screen h-screen">
			<form className="flex flex-col justify-around items-center w-1/4 h-3/4 bg-gray-300">
				<h1 className="text-4xl font-bold">
					Register	
				</h1>	
				
				
				<div className="flex flex-col w-full h-full">
					<TextField label="Username" type="text" name="username-input" required/>
					<TextField label="Email" type="email" name="email-input" required/>
					<TextField label="Password" type= "password" name="password-input" required/>
					<TextField label="Confirm Password" type="password" name="password-confirmation-input" required/>
				</div>
			</form>	
		</div>
	);
}
