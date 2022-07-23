import { about, AboutType } from "./about";

const MoreAboutMe = () => {
	return (
		<main
			id="about"
			className="min-h-[calc(100vh-3.75em)] flex flex-col justify-center px-4 smaller:px-6 py-16 sm:w-[84%] mx-auto"
		>
			<h1 className="text-center">More about me</h1>
			<ul className="flex flex-col gap-8 mt-16">
				{about.map((value: AboutType, idx: number) => (
					<div key={idx} className="even:ml-auto w-fit">
						<h2 className="text-xl mb-2">{value.title}</h2>
						<p>{value.description}</p>
					</div>
				))}
			</ul>
		</main>
	);
};

export default MoreAboutMe;
