import Link from "next/link";
import { FC } from "react";

const Hero: FC = () => {
	return (
		<section className="min-h-[calc(100vh-3.75em)] flex flex-col justify-center px-4 smaller:px-6 pt-16 pb-24 sm:w-[84%] mx-auto">
			<h1>Hey, this is Angkush</h1>
			<h2 className="mb-2">A Full-Stack Developer</h2>
			<h2 className="mt-0">&#40; Currently, looking for internship &#41;</h2>
			<p>
				Hey there, I am Angkush, a full-stack developer and programmer. I code websites
				which are performant and attractive.
			</p>
			<p>I like to watch movies and shows when I am not coding</p>
			<a
				href="https://drive.google.com/file/d/10sPB1KvlbEG0QWgZqcdCgODKqZj5J7WV/view?usp=sharing"
				rel="noopener noreferrer"
				target="_blank"
				className="button w-40 flex items-center justify-center gap-3 mt-6"
				download
			>
				Resume
			</a>
			<Link href="/#projects">
				<button className="button mt-3 sm:hidden w-40" type="button">
					Projects
				</button>
			</Link>
			<Link href="/#contact">
				<button className="button mt-3 sm:hidden w-40" type="button">
					Contact
				</button>
			</Link>
		</section>
	);
};

export default Hero;
