interface DraftYearSelectProps {
	setter: (value: string) => void;
}

export const getCurrentYear = () => {
	return new Date().getFullYear();
};

const DraftYearSelect = ({ setter }: DraftYearSelectProps) => {
	const years = [];
	const currentYear = getCurrentYear();

	for (let i = currentYear; i > 1962; i--) {
		years.push(i.toString());
	}
	return (
		<select
			className='text-black'
			onChange={(e) => {
				// setter(e.target.value);
				console.log(e.target.value);
			}}>
			<option value=''>Select a year...</option>
			{years.map((year) => (
				<option key={year}>{year}</option>
			))}
		</select>
	);
};

export default DraftYearSelect;
