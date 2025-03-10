import { useEffect, useState } from 'react';

import { fetchData } from '../api/projects';
import { Project } from '../@types/project';

export const useGetProjects = (): Project[] => {
	const [projects, setProjects] = useState<Project[] | []>([]);

	useEffect(() => {
		fetchData().then((data) => setProjects((data as Project[]) || []));
	}, []);

	return (projects as Project[]) || [];
};
