"use client";

import Link from 'next/link'
import { useRouter } from 'next/navigation';

export default function Home() {
  
	const router = useRouter();


	return (
    		<main className="w-screen h-screen flex flex-col justify-center items-center">
    
			<button 
				onClick={() => router.push("/register")}
				className="w-1/2 h-11 bg-green-300 text-white">Go to Register</button>
			<button 
				onClick={() => router.push("/login")}
				className="w-1/2 h-11 bg-red-300 text-white">Go to Login</button>
		</main>
  	);
}
