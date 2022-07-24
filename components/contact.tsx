import ContactForm from "./contact-form";

const Contact = () => {
	return (
		<section id="contact" className="bg-gray-100 dark:bg-slate-800">
			<div className="min-h-[calc(100vh-3.75em)] flex flex-col justify-center px-4 smaller:px-6 py-16 sm:w-[84%] mx-auto">
				<h1 className="mb-8 text-center">Contact</h1>
				<ContactForm page={false} />
			</div>
		</section>
	);
};

export default Contact;
