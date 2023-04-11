const SignUpModal = () => {
	return (
		<div className='w-[500px] h-[205px] bg-white rounded-2xl flex flex-col justify-center p-6'>
			<h1 className='mb-6 text-2xl font-bold'>Welcome to CodeLeap network!</h1>
			<form className='flex flex-col'>
				<label className='mb-2 text-base' htmlFor='login'>
					Please enter your username
				</label>
				<input
					className='border-[#777777] rounded-lg border py-2 text-sm px-3 mb-4'
					type='text'
					id='login'
					placeholder='John Doe'
				/>
				<button className='bg-[#7695EC] uppercase font-bold text-white text-base w-28 h-8 rounded-lg self-end'>
					Enter
				</button>
			</form>
		</div>
	);
};

export default SignUpModal;
