import { useEffect, useState } from 'react';
import { User } from '../@types/user';
import { fetchData } from '../api/user';

export const useGetUser = (): User => {
	const defaultUser = {
		name: '',
		surname: '',
		position: '',
		description: '',
		interests: '',
		linkedin: null,
		telegram: null,
		gitlab: null,
		github: null,
		image: '',
	};
	const [user, setUser] = useState<User>(defaultUser);

	useEffect(() => {
		fetchData().then((data) => setUser(data as User));
	}, []);

	return user || defaultUser;
};
