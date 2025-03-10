import { Technologie } from '../@types/technologie';
import { useEffect, useState } from 'react';
import { fetchData } from '../api/technologie';

export const useGetTechnologies = (): Technologie[] => {
	const [experiences, setExperiences] = useState<Technologie[] | []>([]);

	useEffect(() => {
		fetchData().then((data) => setExperiences((data as Technologie[]) || []));
	}, []);

	return (experiences as Technologie[]) || [];
};
