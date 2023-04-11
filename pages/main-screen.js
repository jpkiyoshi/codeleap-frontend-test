import CreatePost from '@/components/CreatePost';
import Header from '@/components/Header';
import PostCard from '@/components/PostCard';

const MainScreen = () => {
	return (
		<>
			<Header />
			<main className='max-w-[800px] mx-auto flex flex-col bg-white p-6 gap-6'>
				<CreatePost />
				<PostCard />
			</main>
		</>
	);
};

export default MainScreen;
