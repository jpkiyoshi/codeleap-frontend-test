import SignUpModal from '@/components/SignUpModal';
import Head from 'next/head';

export default function Home() {
	return (
		<>
			<Head>
				<title>CodeLeap Engineering Test</title>
			</Head>
			<main className='grid min-h-screen p-6 place-content-center'>
				<SignUpModal />
			</main>
		</>
	);
}
