import { useEffect, useRef } from 'react';

const DeletePostModal = ({ isOpened, onProceed, onClose }) => {
	const dialogRef = useRef(null);

	useEffect(() => {
		if (isOpened) {
			dialogRef.current?.showModal();
			document.body.classList.add('modal-open');
		} else {
			dialogRef.current?.close();
			document.body.classList.remove('modal-open');
		}
	}, [isOpened]);

	const proceedAndClose = () => {
		onProceed();
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
					className='bg-white border border-[#999999] font-bold text-base w-[120px] rounded-lg'
					onClick={proceedAndClose}
				>
					Cancel
				</button>
				<button
					className='bg-[#FF5151] text-white font-bold text-base w-[120px] rounded-lg py-2'
					onClick={proceedAndClose}
				>
					Delete
				</button>
			</div>
		</dialog>
	);
};

export default DeletePostModal;
