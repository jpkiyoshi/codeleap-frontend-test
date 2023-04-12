import { useRouter } from 'next/router';
import { useState } from 'react';

const SignUpModal = () => {
	const [username, setUsername] = useState('');
	const [error, setError] = useState(false);
	const router = useRouter();

	function handleSubmit(event) {
		event.preventDefault();

		if (username === 'kiyoshi') {
			setError(false);
			router.push('/main-screen');
		} else {
			setError(true);
		}
	}

	return (
		<div className='w-[500px] h-[205px] bg-white rounded-2xl flex flex-col justify-center p-6'>
			<h1 className='mb-6 text-2xl font-bold'>Welcome to CodeLeap network!</h1>
			<form className='relative flex flex-col' onSubmit={handleSubmit}>
				<label className='mb-2 text-base' htmlFor='username'>
					Please enter your username
				</label>
				<input
					className='border-[#777777] rounded-lg border py-2 text-sm px-3 mb-4'
					type='text'
					id='username'
					placeholder='John Doe'
					value={username}
					onChange={event => {
						setUsername(event.target.value);
						setError(false);
					}}
				/>
				{error && (
					<p className='absolute text-red-500 bottom-4'>Wrong username!</p>
				)}
				<button
					disabled={error}
					className='bg-[#7695EC] uppercase font-bold text-white text-base w-28 h-8 rounded-lg self-end disabled:bg-gray-500'
				>
					Enter
				</button>
			</form>
		</div>
	);
};

export default SignUpModal;
