import axios from 'axios';
import { Project } from '../@types/project';

export const fetchData = async () => {
	try {
		const response = await axios.get('http://localhost:92/api/projects');

		return response.data.data as Project[];
	} catch (error) {
		console.log(error);
	}
};
