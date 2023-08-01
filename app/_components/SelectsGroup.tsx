'use client';
import { useEffect, useState } from 'react';
import RosterProvider, { useRosterPromise } from './PromiseProvider';
import DraftYearSelect from './DraftYearSelect';
import TeamsSelect from './TeamsSelect';
import getNHLYears from '../_lib/getCurrentYear';
import { useQuery } from '@tanstack/react-query';
import useRosters from '../_lib/useRosters';
import PlayerSelect from './PlayerSelect';

interface SelectsGroupProps {}

const SelectsGroup = ({}) => {
	const dates = getNHLYears();
	const [draftYear, setDraftYear] = useState<string>(dates[0].replace('-', ''));
	const [currentTeam, setCurrentTeam] = useState<string>('');

	useEffect(() => {
		setCurrentTeam('');
	}, [draftYear]);

	const rosterReq = useRosters(draftYear);
	const { data: roster, isFetching } = useQuery(
		['roster', draftYear],
		() => rosterReq
	);

	return (
		// <RosterProvider rosterPromise={roster}>
		<div className='flex flex-row gap-3'>
			<DraftYearSelect setter={setDraftYear} />
			{isFetching ? (
				<select className='text-black'>
					<option value=''>Pick a Team...</option>
				</select>
			) : (
				<TeamsSelect data={roster} setter={setCurrentTeam} />
			)}
			<PlayerSelect data={roster} currentTeam={currentTeam} />
		</div>
	);
	{
		/* </RosterProvider> */
	}
	{
	}
};

export default SelectsGroup;
