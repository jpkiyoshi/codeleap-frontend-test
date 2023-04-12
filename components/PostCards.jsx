import { useQuery } from '@tanstack/react-query';
import PostCard from './PostCard';
import { formatTimeAgo } from '@/utils/formatTimeAgo';

const PostCards = () => {
	const getPosts = async () => {
		const res = await fetch('https://dev.codeleap.co.uk/careers/');
		return res.json();
	};

	const { isLoading, isError, data, error } = useQuery({
		queryKey: ['posts'],
		queryFn: getPosts,
	});

	if (isLoading) {
		return <span>Loading...</span>;
	}

	if (isError) {
		return <span>Error: {error.message}</span>;
	}

	const { results } = data;

	return (
		<>
			{results.map(result => (
				<PostCard
					key={result.id}
					title={result.title}
					username={result.username}
					content={result.content}
					timeAgo={formatTimeAgo(result.created_datetime)}
				/>
			))}
		</>
	);
};
export default PostCards;
