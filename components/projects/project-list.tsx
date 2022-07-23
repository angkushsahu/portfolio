import { ProjectType } from "./project-type-array";

const ProjectList = ({ description, image, stack, title, url }: ProjectType) => {
	return (
		<div className="project_container w-full flex flex-col items-center lg:flex-row lg:gap-8">
			<h2 className="lg:hidden mb-8 text-center">{title}</h2>
			{image ? (
				<div className="project_image__container w-full max-w-sm max-h-96 mx-auto">
					<img src={image} alt={title} loading="lazy" />
				</div>
			) : (
				<div className="w-full max-w-sm h-48 mx-auto lg:mx-0 bg-gray-500 flex items-center justify-center">
					<p className="text-center font-primary-regular text-white">No image found</p>
				</div>
			)}
			<div>
				<h2 className="hidden lg:block text-center lg:text-left">{title}</h2>
				<p className="my-4 text-center lg:text-left">{description}</p>
				<h2 className="text-lg mb-2 text-center lg:text-left">Frameworks Used</h2>
				<ul className="flex flex-wrap items-center justify-center lg:items-start lg:justify-start gap-x-10 gap-y-1 mb-6">
					{stack.map((value: string, idx: number) => (
						<li key={idx}>{value}</li>
					))}
				</ul>
				{url ? (
					<a
						href={url}
						className="button block mx-auto lg:mx-0"
						rel="noopener noreferrer"
						target="_blank"
					>
						View Website
					</a>
				) : (
					<button
						type="button"
						className="button cursor-not-allowed block mx-auto lg:mx-0"
						disabled={false}
					>
						On Progress
					</button>
				)}
			</div>
		</div>
	);
};

export default ProjectList;
