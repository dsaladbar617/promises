// import RQProvider from './_components/RQProvider';
import { ErrorBoundary } from 'react-error-boundary';
import SelectsGroup from './_components/SelectsGroup';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export default function Home() {
	return (
		<ErrorBoundary fallback={<div>Something went wrong</div>}>
			<main className='max-w-6xl mx-auto mt-5 text-3xl'>
				<p>Hello</p>
				<SelectsGroup />
			</main>
			<ReactQueryDevtools />
		</ErrorBoundary>
	);
}
