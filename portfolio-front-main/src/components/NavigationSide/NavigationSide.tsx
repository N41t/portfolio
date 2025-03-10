import NavigationLinks from '../NavigationLinks/NavigationLinks';
import '/src/components/NavigationSide/style.scss';
import { useGetUser } from '../../hooks/useGetUser';

const NavigationSide = () => {
	const user = useGetUser();
	return (
		<header className='navigation-side'>
			<div className='box'>
				<div className='navigation-side__header'>
					<div className='navigation-side__image'>
						<img src={user.image} alt='' />
					</div>
					<h1 className='navigation-side__title'>
						{user.name} {user.surname}
					</h1>
					<h2 className='navigation-side__subtitle'>{user.position}</h2>
				</div>
				<NavigationLinks />
			</div>
			<div className='navigation-side__socials'>
				{user.github && (
					<a
						target='_blank'
						className='navigation-side__social'
						href={user.github}
					>
						<img src='/icons/navigation-side/socials/github-icon.svg' alt='' />
					</a>
				)}
				{user.linkedin && (
					<a
						target='_blank'
						className='navigation-side__social'
						href={user.linkedin}
					>
						<img
							src='/icons/navigation-side/socials/linkedin-icon.svg'
							alt=''
						/>
					</a>
				)}
				{user.gitlab && (
					<a
						target='_blank'
						className='navigation-side__social'
						href={user.gitlab}
					>
						<img src='/icons/navigation-side/socials/gitlab-icon.svg' alt='' />
					</a>
				)}
				{user.telegram && (
					<a
						target='_blank'
						className='navigation-side__social'
						href={user.telegram}
					>
						<img
							src='/icons/navigation-side/socials/telegram-icon.svg'
							alt=''
						/>
					</a>
				)}
			</div>
		</header>
	);
};

export default NavigationSide;
