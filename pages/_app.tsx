import "../styles/globals.css";
import { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import { Router } from "next/router";
import { ThemeProvider } from "next-themes";
import Loading from "../components/loading";
import Modal from "../components/modal";
import Context, { ModalType } from "../state";

function MyApp({ Component, pageProps }: AppProps) {
	const [loading, setLoading] = useState<boolean>(false);
	const [modal, setModal] = useState<ModalType>({} as ModalType);

	Router.events.on("routeChangeStart", () => {
		setLoading(previousValue => true);
	});
	Router.events.on("routeChangeComplete", () => {
		setLoading(previousValue => false);
	});

	return (
		<>
			<ThemeProvider attribute="class">
				<Context.Provider value={{ loading, modal, setLoading, setModal }}>
					{loading && <Loading />}
					{modal.open && modal.message && <Modal />}
					<Component {...pageProps} />
				</Context.Provider>
			</ThemeProvider>
		</>
	);
}

export default MyApp;
