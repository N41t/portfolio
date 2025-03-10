import { Education } from '../@types/education';
import axios from 'axios';

export const fetchData = async () => {
	try {
		const response = await axios.get('http://localhost:92/api/trainings');

		return response.data.data as Education[];
	} catch (error) {
		console.log(error);
	}
};
