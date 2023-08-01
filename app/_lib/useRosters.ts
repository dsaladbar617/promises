import { useQuery } from '@tanstack/react-query';

const useRosters = (season: string) => {
	const rosterReq = fetch(
		`https://statsapi.web.nhl.com/api/v1/teams?expand=team.roster&site=en_nhl&season=${season}`,
		{
			cache: 'no-cache'
		}
	).then((res) => res.json());

	return rosterReq as Promise<TeamType>;
};

export default useRosters;
