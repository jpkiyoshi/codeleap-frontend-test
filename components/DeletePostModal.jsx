import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useEffect, useRef } from 'react';

const DeletePostModal = ({ isOpened, onClose, postId }) => {
	const queryClient = useQueryClient();

	const dialogRef = useRef(null);

	const mutation = useMutation({
		mutationFn: postId =>
			fetch(`https://dev.codeleap.co.uk/careers/${postId}/`, {
				method: 'DELETE',
			}),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['posts'] });
		},
	});

	useEffect(() => {
		if (isOpened) {
			dialogRef.current?.showModal();
			document.body.classList.add('modal-open');
		} else {
			dialogRef.current?.close();
			document.body.classList.remove('modal-open');
		}
	}, [isOpened]);

	const handleDelete = () => {
		mutation.mutate(postId);
		onClose();
	};

	return (
		<dialog
			ref={dialogRef}
			onCancel={onClose}
			className='rounded-2xl w-[660px] h-[146px] flex flex-col justify-between p-6'
		>
			<h2 className='text-xl font-bold'>
				Are you sure you want to delete this item?
			</h2>
			<div className='flex self-end gap-4'>
				<button
					className='transition-transform hover:scale-95 bg-white border border-[#999999] font-bold text-base w-[120px] rounded-lg'
					onClick={onClose}
				>
					Cancel
				</button>
				<button
					className='bg-[#FF5151] text-white font-bold text-base w-[120px] rounded-lg py-2 transition-transform hover:scale-95'
					onClick={handleDelete}
				>
					Delete
				</button>
			</div>
		</dialog>
	);
};

export default DeletePostModal;
