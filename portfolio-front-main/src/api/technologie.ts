import { Technologie } from './../@types/technologie';

import axios from 'axios';

export const fetchData = async () => {
	try {
		const response = await axios.get('http://localhost:92/api/technologies');

		return response.data.data as Technologie[];
	} catch (error) {
		console.log(error);
	}
};
