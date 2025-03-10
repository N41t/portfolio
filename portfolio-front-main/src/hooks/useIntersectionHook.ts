import { useEffect, useRef } from 'react';
import { useNavigationStore } from '../store/navigation';
import { useIntersection } from 'react-use';

export const useIntersectionHook = (navigationId: string) => {
	const { setCurrentNavigationId } = useNavigationStore();
	const intersectionRef = useRef(null);

	const intersection = useIntersection(intersectionRef, {
		threshold: 0.5,
	});

	useEffect(() => {
		if (intersection?.isIntersecting) {
			setCurrentNavigationId(navigationId);
		}
	}, [intersection?.isIntersecting]);

	return {
		intersectionRef,
	};
};
