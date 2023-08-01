import { useQuery } from '@tanstack/react-query';
import { useRosterPromise } from './PromiseProvider';

interface TeamsSelectProps {
	setter: (value: string) => void;
	data: TeamType | undefined;
}

const TeamsSelect = ({ setter, data }: TeamsSelectProps) => {
	// const rosterPromise = useRosterPromise();
	// const { data: roster, isFetching } = useQuery(
	// 	['roster', rosterPromise],
	// 	() => rosterPromise
	// );

	// console.log(roster);

	// if (isFetching)
	// 	return (
	// 		<select className='text-black'>
	// 			<option value=''>Loading...</option>
	// 		</select>
	// 	);

	// console.log(data);

	return (
		<select
			className='text-black'
			onChange={(e) => {
				setter(e.target.value);
				// console.log(e.target.value);
			}}>
			<option value=''>Pick a Team...</option>
			{data?.teams
				?.sort((a, b) => {
					if (a.name.toUpperCase() > b.name.toUpperCase()) {
						return 1;
					}
					if (a.name.toUpperCase() < b.name.toUpperCase()) {
						return -1;
					}
					return 0;
				})
				.map((elem) => (
					<option key={elem.id} value={elem.id.toString()}>
						{elem.name}
					</option>
				))}
		</select>
	);
};

export default TeamsSelect;
