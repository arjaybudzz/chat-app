import axios from 'axios';
import { z } from 'zod'


const Register = () => {

	return (
		<div className="flex flex-col justify-center items-center w-screen h-screen">
			<form className="w-1/2 h-4/5 flex flex-col justify-around items-center shadow-xl rounded-xl bg-gray-300 p-4">
				<h1 className="text-6xl font-bold">Register</h1>
				<div className="w-full h-auto flex flex-col gap-4">
					<input type="text" required placeholder="Username" className="w-full h-11 px-2"/>	
					<input type="email" required placeholder="Email" className="w-full h-11 px-2"/>
					<input type="password" required placeholder="Password" className="w-full h-11 px-2"/>
					<input type="password" required placeholder="Password Confirmation" className="w-full h-11 px-2"/>
				</div>

				<button type="submit" className="w-full h-11 bg-black text-white">SUBMIT</button>
			</form>
		</div>
	);
}

export default Register;
