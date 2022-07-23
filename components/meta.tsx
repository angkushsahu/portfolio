import Head from "next/head";

const Meta = ({ title }: { title: string }) => {
	return (
		<>
			<Head>
				<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
				<meta charSet="UTF-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta
					name="description"
					content="Hey there, I am Angkush, a full-stack developer and programmer. I code websites which are performant and attractive. I am currently looking for a full-stack internship. Here is my portfolio which contains info about my career so far and states who I am. Hope you like this website."
				/>
				<meta name="robots" content="INDEX, FOLLOW" />
				<meta name="keyword" content="portfolio, angkush, sahu, website" />
				<title>{title}</title>
			</Head>
		</>
	);
};

export default Meta;
