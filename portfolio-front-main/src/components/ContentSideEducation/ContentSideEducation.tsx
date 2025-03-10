import { useGetEducation } from '../../hooks/useGetEducation';
import { useIntersectionHook } from '../../hooks/useIntersectionHook';

const ContentSideEducation = () => {
	const { intersectionRef } = useIntersectionHook('education');

	const education = useGetEducation();
	return (
		<div
			ref={intersectionRef}
			className='content-side__education'
			id='education'
		>
			<div className='content-side__education__items'>
				{education.map((item) => {
					return (
						<div className='content-side__education__item' key={item.id}>
							<div className='content-side__education__item-left'>
								<h3 className='content-side__education__item-title'>
									{item.title}
								</h3>
								<h4 className='content-side__education__item-subtitle'>
									{item.qualification}
								</h4>
								<p className='content-side__education__item-text'>
									{item.program_name}
								</p>
							</div>
							<div className='content-side__education__item-right'>
								<p className='content-side__education__item-date'>
									{item.date_from} - {item.date_to}
								</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default ContentSideEducation;
