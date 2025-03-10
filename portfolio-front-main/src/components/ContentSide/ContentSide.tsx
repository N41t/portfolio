import ContentSideAbout from '../ContentSideAbout/ContentSideAbout';
import ContentSideEducation from '../ContentSideEducation/ContentSideEducation';
import ContentSideExperience from '../ContentSideExperience/ContentSideExperience';
import ContentSideInterests from '../ContentSideInterests/ContentSideInterests';
import ContentSideProjects from '../ContentSideProjects/ContentSideProjects';
import ContentSideSkills from '../ContentSideSkills/ContentSideSkills';
import '/src/components/ContentSide/style.scss';

const ContentSide = () => {
	return (
		<div className='content-side'>
			<ContentSideAbout />
			<ContentSideExperience />
			<ContentSideProjects />
			<ContentSideEducation />
			<ContentSideSkills />
			<ContentSideInterests />
		</div>
	);
};

export default ContentSide;
