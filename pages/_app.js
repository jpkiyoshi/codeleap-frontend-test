import UserContext from '@/context/userContext.js';
import { USERNAME } from '@/constants';
import '@/styles/globals.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
	return (
		<QueryClientProvider client={queryClient}>
			<UserContext.Provider value={{ username: USERNAME }}>
				<Component {...pageProps} />
			</UserContext.Provider>
		</QueryClientProvider>
	);
}
