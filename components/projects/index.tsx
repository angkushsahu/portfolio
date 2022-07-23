import { projects, ProjectType } from "./project-type-array";
import ProjectList from "./project-list";

const Projects = () => {
	return (
		<section id="projects" className="bg-gray-100 dark:bg-slate-700">
			<div className="min-h-[calc(100vh-3.75em)] flex flex-col justify-center px-4 smaller:px-6 pt-16 pb-24 sm:w-[84%] mx-auto">
				<h1 className="mb-24 text-center">Projects</h1>
				<div className="flex flex-col justify-center gap-24">
					{projects.map((project: ProjectType, idx: number) => (
						<ProjectList
							key={idx}
							description={project.description}
							image={project.image}
							stack={project.stack}
							title={project.title}
							url={project.url}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
