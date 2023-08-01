import getNHLYears from '../_lib/getCurrentYear';

interface DraftYearSelectProps {
	setter: (value: string) => void;
}

const DraftYearSelect = ({ setter }: DraftYearSelectProps) => {
	const dates = getNHLYears();

	return (
		<select
			className='text-black'
			onChange={(e) => {
				setter(e.target.value.replace('-', ''));
				// console.log(e.target.value);
			}}>
			<option value=''>Select a year...</option>
			{dates.map((year) => (
				<option key={year}>{year}</option>
			))}
		</select>
	);
};

export default DraftYearSelect;
