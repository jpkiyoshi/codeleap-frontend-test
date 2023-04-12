import React, { useState } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import PostCard from './PostCard';
import { formatTimeAgo } from '@/utils/formatTimeAgo';

const PostCardList = () => {
	const [page, setPage] = useState(1);

	const fetchPosts = async ({ pageParam = 0 }) => {
		const response = await fetch(
			`https://dev.codeleap.co.uk/careers/?limit=10&offset=${pageParam * 10}`
		);
		return response.json();
	};

	const { data, error, fetchNextPage, hasNextPage, isFetchingNextPage } =
		useInfiniteQuery(['posts'], fetchPosts, {
			getNextPageParam: lastPage => (lastPage.next ? page : undefined),
		});

	if (error) return <p>Error loading posts</p>;

	return (
		<>
			{data?.pages.map(pageData =>
				pageData.results.map(result => (
					<PostCard
						key={result.id}
						id={result.id}
						title={result.title}
						username={result.username}
						content={result.content}
						timeAgo={formatTimeAgo(result.created_datetime)}
					/>
				))
			)}
			<div className='mx-auto'>
				{hasNextPage && (
					<button
						className='bg-[#47B960] px-6 transition-transform hover:scale-95 py-3 font-bold text-white text-base rounded-lg  disabled:bg-gray-500'
						onClick={() => {
							setPage(page => page + 1);
							fetchNextPage();
						}}
						disabled={isFetchingNextPage}
					>
						{isFetchingNextPage ? 'Loading more posts...' : 'Load more posts'}
					</button>
				)}
			</div>
		</>
	);
};

export default PostCardList;
