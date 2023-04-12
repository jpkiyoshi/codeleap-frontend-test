import { useMutation, useQueryClient } from '@tanstack/react-query';

const CreatePost = () => {
	const queryClient = useQueryClient();

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

		const { title, content } = event.target.elements;

		mutation.mutate({
			username: 'kiyoshi',
			title: title.value,
			content: content.value,
		});

		event.target.reset();
	}

	return (
		<section className='flex flex-col border border-[#999999] p-6 rounded-2xl'>
			<h1 className='mb-6 text-2xl font-bold'>What’s on your mind?</h1>
			<form className='flex flex-col' onSubmit={handleSubmit}>
				<label className='mb-2 text-base' htmlFor='title'>
					Title
				</label>
				<input
					type='text'
					id='title'
					className='border-[#777777] rounded-lg border py-2 text-sm px-3 mb-4'
					placeholder='Hello world'
				/>
				<label className='mb-2 text-base' htmlFor='content'>
					Content
				</label>
				<textarea
					id='content'
					rows='4'
					placeholder='Content here'
					className='border-[#777777] rounded-lg border py-2 text-sm px-3 mb-4'
				></textarea>
				<button
					disabled={mutation.isLoading}
					type='submit'
					className='bg-[#7695EC] font-bold text-white text-base w-[120px] h-8 rounded-lg self-end'
				>
					Create
				</button>
			</form>
		</section>
	);
};
export default CreatePost;
