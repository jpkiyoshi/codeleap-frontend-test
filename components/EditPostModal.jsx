import { useEffect, useRef, useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { USERNAME } from '@/constants';

const EditPostModal = ({ isOpened, onClose, postId, title, content }) => {
	const queryClient = useQueryClient();

	const dialogRef = useRef(null);

	const [newTitle, setNewTitle] = useState(title);
	const [newContent, setNewContent] = useState(content);

	useEffect(() => {
		if (isOpened) {
			dialogRef.current?.showModal();
			document.body.classList.add('modal-open');
		} else {
			dialogRef.current?.close();
			document.body.classList.remove('modal-open');
		}
	}, [isOpened]);

	const mutation = useMutation({
		mutationFn: postId =>
			fetch(`https://dev.codeleap.co.uk/careers/${postId}/`, {
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					username: USERNAME,
					title: newTitle,
					content: newContent,
				}),
			}),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['posts'] });
		},
	});

	const handleSubmit = event => {
		event.preventDefault();
		mutation.mutate(postId);
		onClose();

		event.target.reset();
	};

	return (
		<dialog
			ref={dialogRef}
			onCancel={onClose}
			className='rounded-2xl w-[660px] h-[334px] flex flex-col justify-between p-6 overflow-hidden'
		>
			<h2 className='mb-3 text-xl font-bold'>Edit item</h2>
			<form className='flex flex-col' onSubmit={handleSubmit}>
				<label className='mb-2 text-base' htmlFor='title'>
					Title
				</label>
				<input
					value={newTitle}
					onChange={e => setNewTitle(e.target.value)}
					type='text'
					id='title'
					className='border-[#777777] rounded-lg border py-2 text-sm px-3 mb-4'
					placeholder='Hello world'
				/>
				<label className='mb-2 text-base' htmlFor='content'>
					Content
				</label>
				<textarea
					value={newContent}
					onChange={e => setNewContent(e.target.value)}
					type='text'
					id='content'
					rows='3'
					placeholder='Content here'
					className='border-[#777777] rounded-lg border py-2 text-sm px-3 mb-4'
				></textarea>
				<div className='flex self-end gap-4'>
					<button
						className='bg-white border transition-transform hover:scale-95 border-[#999999] font-bold text-base w-[120px] rounded-lg'
						onClick={onClose}
					>
						Cancel
					</button>
					<button
						disabled={mutation.isLoading}
						type='submit'
						className='bg-[#47B960] font-bold text-white text-base transition-transform hover:scale-95 w-[120px] h-8 rounded-lg self-end'
					>
						Save
					</button>
				</div>
			</form>
		</dialog>
	);
};

export default EditPostModal;
