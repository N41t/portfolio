const NavigationLink = ({
	currentActiveLink,
	id,
	text,
	setCurrentActiveLink,
}: {
	currentActiveLink: string;
	id: string;
	text: string;
	setCurrentActiveLink: Function;
}) => {
	return (
		<a
			target='_blank'
			href={`#${id}`}
			onClick={() => setCurrentActiveLink(id)}
			className={`navigation-side__link ${
				currentActiveLink == id ? 'active' : ''
			}`}
		>
			<div className='navigation-side__link-icon'></div>
			<h4 className='navigation-side__link-text'>{text}</h4>
		</a>
	);
};

export default NavigationLink;
