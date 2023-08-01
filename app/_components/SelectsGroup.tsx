'use client';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { usePromise } from './PromiseProvider';
import DraftYearSelect from './DraftYearSelect';

interface SelectsGroupProps {}

const SelectsGroup = ({}) => {
	const [draftYear, setDraftYear] = useState<string | null>(null);
	const rosterPromise = usePromise();
	const { data: roster, isFetching } = useQuery(
		['roster'],
		() => rosterPromise
	);

	if (isFetching)
		return (
			<select className='text-black w-1/4'>
				<option value=''>Loading...</option>
			</select>
		);

	console.log(roster);

	return (
		<div>
			<DraftYearSelect setter={setDraftYear} />
			<select></select>
		</div>
	);
};

export default SelectsGroup;
