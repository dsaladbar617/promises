'use client';
import { createContext, useContext } from 'react';

const PromiseContext = createContext<TeamType | undefined>(undefined);

export const useRosterPromise = () => {
	const roster = useContext(PromiseContext);
	if (!roster)
		throw new Error('usePromise must be used within a PromiseProvider');
	return roster;
};

const RosterProvider = ({
	children,
	rosterPromise
}: {
	children: React.ReactNode;
	rosterPromise: TeamType | undefined;
}) => {
	return (
		<PromiseContext.Provider value={rosterPromise}>
			{children}
		</PromiseContext.Provider>
	);
};

export default RosterProvider;
