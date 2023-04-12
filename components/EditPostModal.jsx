import { useEffect, useRef } from 'react';

const EditPostModal = ({ isOpened, onProceed, onClose }) => {
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
			className='rounded-2xl w-[660px] h-[334px] flex flex-col justify-between p-6 overflow-hidden'
		>
			<h2 className='mb-3 text-xl font-bold'>Edit item</h2>
			<form className='flex flex-col'>
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
					rows='3'
					placeholder='Content here'
					className='border-[#777777] rounded-lg border py-2 text-sm px-3 mb-4'
				></textarea>
				<div className='flex self-end gap-4'>
					<button
						className='bg-white border border-[#999999] font-bold text-base w-[120px] rounded-lg'
						onClick={proceedAndClose}
					>
						Cancel
					</button>
					<button className='bg-[#47B960] font-bold text-white text-base w-[120px] h-8 rounded-lg self-end'>
						Save
					</button>
				</div>
			</form>
		</dialog>
	);
};

export default EditPostModal;
