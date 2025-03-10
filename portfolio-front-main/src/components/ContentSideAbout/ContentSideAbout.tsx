import { useGetUser } from '../../hooks/useGetUser';
import { useIntersectionHook } from '../../hooks/useIntersectionHook';

const ContentSideAbout = () => {
	const { intersectionRef } = useIntersectionHook('about');
	const user = useGetUser();

	return (
		<div className='content-side__about' id='about' ref={intersectionRef}>
			<p className='content-side__about-text'>{user.description}</p>
		</div>
	);
};

export default ContentSideAbout;
