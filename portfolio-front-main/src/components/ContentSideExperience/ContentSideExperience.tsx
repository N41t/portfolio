import { useGetExperiences } from '../../hooks/useGetExperiences';
import { useIntersectionHook } from '../../hooks/useIntersectionHook';

const ContentSideExperience = () => {
	const { intersectionRef } = useIntersectionHook('experience');

	const experiences = useGetExperiences();
	return (
		<div
			className='content-side__experience'
			ref={intersectionRef}
			id='experience'
		>
			{experiences.map((experience) => {
				return (
					<div className='content-side__experience-item' key={experience.id}>
						<div className='content-side__experience-period'>
							<p className='content-side__experience-date'>
								{experience.date_from} — {experience.date_to}
							</p>
						</div>
						<div className='content-side__experience-info'>
							<h4 className='content-side__experience-title'>
								{experience.position} · {experience.company_name}
								<span>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 20 20'
										fill='rgba(226, 232, 240, 1)'
										aria-hidden='true'
									>
										<path d='M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z'></path>
									</svg>
								</span>
							</h4>
							<p className='content-side__experience-text'>
								{experience.short_description}
							</p>
							<div className='content-side__experience-technologies'>
								{experience.technologies.map((technologie) => {
									return (
										<div
											key={technologie.id}
											className='content-side__experience-technologie'
										>
											<p className='content-side__experience-technologie-name'>
												{technologie.title}
											</p>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default ContentSideExperience;
