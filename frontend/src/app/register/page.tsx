import TextField from '@mui/material/TextField'

export default function Register() {
	return (

		<div className="flex justify-center items-center w-screen h-screen">
			<form className="flex flex-col justify-around items-center shadow-md rounded-xl shadow-black w-1/4 h-3/4 p-6 bg-gray-300">
				<div className="flex w-full h-auto justify-center mb-5 items-center">
					<h1 className="text-4xl font-bold">
						Register	
					</h1>	
				</div>	
				
				<div className="flex flex-col w-full h-full gap-4">
					<TextField label="Username" type="text" name="username-input" required/>
					<TextField label="Email" type="email" name="email-input" required/>
					<TextField label="Password" type= "password" name="password-input" required/>
					<TextField label="Confirm Password" type="password" name="password-confirmation-input" required/>
				</div>

				<button type="submit" className="w-full h-14 bg-black text-white font-bold">SUBMIT</button>
			</form>	
		</div>
	);
}
