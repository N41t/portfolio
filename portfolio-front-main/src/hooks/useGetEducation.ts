import { Education } from './../@types/education';

import { useEffect, useState } from 'react';
import { fetchData } from '../api/education';

export const useGetEducation = (): Education[] => {
	const [experiences, setExperiences] = useState<Education[] | []>([]);

	useEffect(() => {
		fetchData().then((data) => setExperiences((data as Education[]) || []));
	}, []);

	return (experiences as Education[]) || [];
};
