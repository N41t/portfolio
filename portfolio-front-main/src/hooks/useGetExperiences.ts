import { Experience } from './../@types/experience';
import { useEffect, useState } from 'react';
import { fetchData } from '../api/experiences';

export const useGetExperiences = (): Experience[] => {
	const [experiences, setExperiences] = useState<Experience[] | []>([]);

	useEffect(() => {
		fetchData().then((data) => setExperiences((data as Experience[]) || []));
	}, []);

	return (experiences as Experience[]) || [];
};
