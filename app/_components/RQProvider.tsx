'use client';
import { useRef } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const RQProvider = ({ children }: { children: React.ReactNode }) => {
	const queryClientRef = useRef<QueryClient>(new QueryClient());
	return (
		<QueryClientProvider client={queryClientRef.current}>
			{children}
		</QueryClientProvider>
	);
};

export default RQProvider;
