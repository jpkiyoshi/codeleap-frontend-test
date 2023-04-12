import CreatePost from '@/components/CreatePost';
import Header from '@/components/Header';
import PostCards from '@/components/PostCards';

const MainScreen = () => {
	return (
		<>
			<Header />
			<main className='max-w-[800px] mx-auto flex flex-col bg-white p-6 gap-6'>
				<CreatePost />
				<PostCards />
			</main>
		</>
	);
};

export default MainScreen;
