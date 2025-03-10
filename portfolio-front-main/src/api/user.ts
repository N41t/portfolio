import axios from 'axios';
import { User } from '../@types/user';

export const fetchData = async () => {
	try {
		const response = await axios.get('http://localhost:92/api/users');

		console.log(response);
		return response.data.data[0] as User;
	} catch (error) {
		console.log(error);
	}
};
