import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';

const CreatePost = () => {
	const queryClient = useQueryClient();
	const [error, setError] = useState(false);
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');

	const mutation = useMutation({
		mutationFn: newPost =>
			fetch('https://dev.codeleap.co.uk/careers/', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(newPost),
			}).then(res => res.json()),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['posts'] });
		},
	});

	function handleSubmit(event) {
		event.preventDefault();

		if (title === '' || content === '') {
			setError(true);
			return;
		}

		mutation.mutate({
			username: 'kiyoshi',
			title,
			content,
		});

		event.target.reset();
	}

	return (
		<section className='flex flex-col border border-[#999999] p-6 rounded-2xl'>
			<h1 className='mb-6 text-2xl font-bold'>What’s on your mind?</h1>
			<form className='relative flex flex-col' onSubmit={handleSubmit}>
				<label className='mb-2 text-base' htmlFor='title'>
					Title
				</label>
				<input
					value={title}
					onChange={e => {
						setError(false);
						setTitle(e.target.value);
					}}
					type='text'
					id='title'
					className='border-[#777777] rounded-lg border py-2 text-sm px-3 mb-4'
					placeholder='Hello world'
				/>
				<label className='mb-2 text-base' htmlFor='content'>
					Content
				</label>
				<textarea
					value={content}
					onChange={e => {
						setError(false);
						setContent(e.target.value);
					}}
					id='content'
					rows='4'
					placeholder='Content here'
					className='border-[#777777] rounded-lg border py-2 text-sm px-3 mb-4'
				></textarea>
				<button
					disabled={mutation.isLoading || error}
					type='submit'
					className='bg-[#7695EC] disabled:bg-gray-500 font-bold text-white text-base w-[120px] h-8 rounded-lg self-end hover:bg-[#5175C8] transition-colors'
				>
					Create
				</button>
				{error && (
					<p className='absolute text-red-500 bottom-4'>
						Fields can not be empty!
					</p>
				)}
			</form>
		</section>
	);
};
export default CreatePost;
