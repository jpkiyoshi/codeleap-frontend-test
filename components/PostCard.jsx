import { useState } from 'react';
import DeletePostModal from './DeletePostModal';
import EditPostModal from './EditPostModal';
import { USERNAME } from '@/constants';

const PostCard = ({ title, username, timeAgo, content, id }) => {
	const [isDeleteModalOpened, setIsDeleteModalOpened] = useState(false);
	const [isEditModalOpened, setIsEditModalOpened] = useState(false);

	return (
		<article className='border rounded-2xl border-[#999999]'>
			<div className='bg-[#7695EC] flex justify-between h-[70px] p-6 rounded-t-2xl'>
				<h2 className='mb-6 text-xl font-bold text-white'>{title}</h2>
				{username === USERNAME && (
					<div className='flex gap-9'>
						<button
							className='transition-transform hover:scale-95'
							onClick={() => setIsDeleteModalOpened(true)}
						>
							<svg
								width='19'
								height='24'
								viewBox='0 0 19 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M1.80087 20.75C1.80087 22.125 2.971 23.25 4.40115 23.25H14.8023C16.2324 23.25 17.4025 22.125 17.4025 20.75V5.75H1.80087V20.75ZM4.99921 11.85L6.83241 10.0875L9.6017 12.7375L12.358 10.0875L14.1912 11.85L11.4349 14.5L14.1912 17.15L12.358 18.9125L9.6017 16.2625L6.84541 18.9125L5.01221 17.15L7.76851 14.5L4.99921 11.85ZM14.1522 2L12.852 0.75H6.35136L5.05122 2H0.500732V4.5H18.7027V2H14.1522Z'
									fill='white'
								/>
							</svg>
						</button>
						<button
							className='transition-transform hover:scale-95'
							onClick={() => setIsEditModalOpened(true)}
						>
							<div className='relative'>
								<svg
									width='25'
									height='24'
									viewBox='0 0 25 24'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M3.50067 23.25H21.7026C23.1367 23.25 24.3029 22.1287 24.3029 20.75V9.915L21.7026 12.415V20.75H7.6065C7.5727 20.75 7.5376 20.7625 7.50379 20.7625C7.46089 20.7625 7.41798 20.7512 7.37378 20.75H3.50067V3.25H12.4027L15.003 0.75H3.50067C2.06661 0.75 0.900391 1.87125 0.900391 3.25V20.75C0.900391 22.1287 2.06661 23.25 3.50067 23.25Z'
										fill='white'
									/>
								</svg>
								<svg
									className='absolute top-0 right-0'
									width='20'
									height='19'
									viewBox='0 0 20 19'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M0.100952 18.2663L5.83846 18.2475L18.3614 6.3225C18.8528 5.85 19.1233 5.2225 19.1233 4.555C19.1233 3.8875 18.8528 3.26 18.3614 2.7875L16.2994 0.805C15.3165 -0.14 13.6016 -0.135 12.6265 0.80125L0.100952 12.7288V18.2663ZM14.461 2.5725L16.5269 4.55125L14.4506 6.52875L12.3886 4.5475L14.461 2.5725ZM2.70123 13.7713L10.5411 6.305L12.6031 8.2875L4.76455 15.7513L2.70123 15.7575V13.7713Z'
										fill='white'
									/>
								</svg>
							</div>
						</button>
					</div>
				)}
			</div>
			<div className='p-6'>
				<div className='flex justify-between text-[#777777] font-normal mb-4'>
					<h3 className='text-lg font-bold text-[#777777]'>@{username}</h3>
					<p className=''>{timeAgo}</p>
				</div>
				<p className='text-lg font-normal leading-5'>{content}</p>
			</div>
			<DeletePostModal
				isOpened={isDeleteModalOpened}
				onClose={() => setIsDeleteModalOpened(false)}
				postId={id}
			/>

			<EditPostModal
				isOpened={isEditModalOpened}
				onClose={() => setIsEditModalOpened(false)}
				postId={id}
				title={title}
				content={content}
			/>
		</article>
	);
};
export default PostCard;
