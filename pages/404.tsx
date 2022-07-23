import { NextPage } from "next";
import Link from "next/link";
import Gradient from "../components/gradient";
import Meta from "../components/meta";

const Error: NextPage = () => {
	return (
		<main className="root relative min-h-screen flex flex-col items-center justify-center px-8 py-16">
			<Gradient />
			<Meta title="Error | Angkush Sahu" />
			<h1 className="text-8xl smaller:text-9xl">404</h1>
			{/* <h2 className="text-center" style={{ color: "gray" }}> */}
			<h2 className="text-center">This page does not exist</h2>
			<Link href="/" replace={true}>
				<a className="button z-20">Go to Home</a>
			</Link>
		</main>
	);
};

export default Error;
