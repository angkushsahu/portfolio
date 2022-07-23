import { Suspense } from "react";
import { NextPage } from "next";
import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("../components/navbar"), { suspense: true });
const SocialLinks = dynamic(() => import("../components/social-links"), { suspense: true });
import Loading from "../components/loading";
import ContactForm from "../components/contact-form";
import Meta from "../components/meta";

const Contact: NextPage = () => {
	return (
		<Suspense fallback={<Loading />}>
			<Meta title="Contact | Angkush Sahu" />
			<main className="relative root">
				<Navbar />
				<div className="min-h-[calc(100vh-3.75em)] flex flex-col justify-center px-4 smaller:px-6 py-16 sm:max-w-[84%] mx-auto">
					<h1 className="mb-8 text-center">Contact</h1>
					<ContactForm page={true} />
				</div>
				<SocialLinks />
			</main>
		</Suspense>
	);
};

export default Contact;
