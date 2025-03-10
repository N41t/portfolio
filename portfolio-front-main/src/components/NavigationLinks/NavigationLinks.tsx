import NavigationLink from '../NavigationLink/NavigationLink';
import { useNavigationStore } from '../../store/navigation';

const NavigationLinks = () => {
	const { currentNavigationId, setCurrentNavigationId } = useNavigationStore();

	const links = [
		{
			id: 'about',
			text: 'ABOUT',
		},
		{
			id: 'experience',
			text: 'EXPERIENCE',
		},
		{
			id: 'projects',
			text: 'PROJECTS',
		},
		{
			id: 'education',
			text: 'EDUCATION',
		},
		{
			id: 'skills',
			text: 'SKILLS',
		},
		{
			id: 'interests',
			text: 'INTERESTS',
		},
	];

	return (
		<nav className='navigation-side__links'>
			{links.map((link) => {
				return (
					<NavigationLink
						key={link.id}
						id={link.id}
						currentActiveLink={currentNavigationId}
						text={link.text}
						setCurrentActiveLink={setCurrentNavigationId}
					/>
				);
			})}
		</nav>
	);
};

export default NavigationLinks;
