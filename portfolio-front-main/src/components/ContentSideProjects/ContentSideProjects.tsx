import { useGetProjects } from '../../hooks/useGetProjects';
import { useIntersectionHook } from '../../hooks/useIntersectionHook';

const ContentSideProjects = () => {
	const { intersectionRef } = useIntersectionHook('projects');

	const projects = useGetProjects();

	console.log(projects);
	if (projects.length == 0) return null;
	return (
		<div className='content-side__projects' ref={intersectionRef} id='projects'>
			{projects.map((project) => {
				return (
					<a
						target='_blank'
						key={project.id}
						href={project.link}
						className='content-side__project'
					>
						<div className='content-side__project-image'>
							<img src={project.image} alt='' />
						</div>
						<div className='content-side__project-info'>
							<h4 className='content-side__project-title'>
								{project.title}{' '}
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
							<p className='content-side__project-text'>
								{project.description}
							</p>
						</div>
					</a>
				);
			})}
		</div>
	);
};

export default ContentSideProjects;
