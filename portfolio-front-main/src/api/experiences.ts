import { Experience } from '../@types/experience';
import axios from 'axios';

export const fetchData = async () => {
	try {
		const response = await axios.get('http://localhost:92/api/experiences');

		return response.data.data as Experience[];
	} catch (error) {
		console.log(error);
	}
};
