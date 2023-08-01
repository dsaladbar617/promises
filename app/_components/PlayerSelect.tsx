interface PlayerSelectProps {
	data: TeamType | undefined;
	currentTeam: string;
}

const PlayerSelect = ({ data, currentTeam }: PlayerSelectProps) => {
	const selectedTeam = data?.teams?.filter(
		(elem) => elem.id.toString() === currentTeam
	)[0];

	console.log(selectedTeam?.roster?.roster);
	return (
		<select className='text-black'>
			<option value=''>Pick a Player...</option>
			{selectedTeam?.roster?.roster
				.sort((a, b) => {
					if (
						a.person.fullName.toUpperCase() > b.person.fullName.toUpperCase()
					) {
						return 1;
					}
					if (
						a.person.fullName.toUpperCase() < b.person.fullName.toUpperCase()
					) {
						return -1;
					}
					return 0;
				})
				.map((elem, index) => (
					<option key={index} value={elem.person.fullName}>
						{elem.person.fullName}
					</option>
				))}
		</select>
	);
};

export default PlayerSelect;
