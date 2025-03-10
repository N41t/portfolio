import { useIntersectionHook } from '../../hooks/useIntersectionHook';
import { useGetUser } from '../../hooks/useGetUser';

const ContentSideInterests = () => {
	const { intersectionRef } = useIntersectionHook('interests');
	const user = useGetUser();

	return (
		<div
			className='content-side__interests'
			ref={intersectionRef}
			id='interests'
		>
			<h3 className='content-side__interests-title'>Interests</h3>

			<div className='content-side__interests-texts'>
				<p className='content-side__interests-text'>{user.interests}</p>
			</div>
		</div>
	);
};

export default ContentSideInterests;
