import Link from 'next/link'


export default function Home() {
  return (
    <main>
	<Link href="/register">Go to register</Link>
	<Link href="/login"> Go to login </Link>
    </main>
  );
}
