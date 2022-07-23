import { Suspense } from "react";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Loading from "../components/loading";
import Meta from "../components/meta";
import Gradient from "../components/gradient";
const Navbar = dynamic(() => import("../components/navbar"), { suspense: true });
const Hero = dynamic(() => import("../components/hero"), { suspense: true });
const Skills = dynamic(() => import("../components/skills"), { suspense: true });
const Projects = dynamic(() => import("../components/projects"), { suspense: true });
const MoreAboutMe = dynamic(() => import("../components/more-about"), { suspense: true });
const Contact = dynamic(() => import("../components/contact"), { suspense: true });
const SocialLinks = dynamic(() => import("../components/social-links"), { suspense: true });

const Home: NextPage = () => {
	return (
		<main className="root relative min-h-[100vh]">
			<Gradient />
			<Meta title="Angkush Sahu" />
			<Suspense fallback={<Loading />}>
				<Navbar />
				<Hero />
				<Skills />
				<Projects />
				<MoreAboutMe />
				<Contact />
				<SocialLinks />
			</Suspense>
		</main>
	);
};

export default Home;
