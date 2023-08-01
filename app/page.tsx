import RQProvider from './_components/RQProvider';
import { ErrorBoundary } from 'react-error-boundary';
import RosterProvider from './_components/PromiseProvider';
import SelectsGroup from './_components/SelectsGroup';

export default function Home() {
	const rosterReq = fetch(
		'https://statsapi.web.nhl.com/api/v1/teams?expand=team.roster&site=en_nhl&season=20232024',
		{
			cache: 'no-cache'
		}
	).then((res) => res.json());

	return (
		<RQProvider>
			<ErrorBoundary fallback={<div>Something went wrong</div>}>
				<RosterProvider rosterPromise={rosterReq}>
					<main className='max-w-6xl mx-auto mt-5 text-3xl'>
						<p>Hello</p>
						<SelectsGroup />
					</main>
				</RosterProvider>
			</ErrorBoundary>
		</RQProvider>
	);
}
