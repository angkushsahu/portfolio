import { useContext } from "react";
import Context from "../state";

const Modal = () => {
	const { modal, setModal } = useContext(Context);

	return (
		<main className="min-h-screen fixed inset-0 z-40 bg-white/10 backdrop-blur-md flex items-center justify-center px-6">
			<section className="w-full max-w-lg bg-gradient-to-b from-gray-400 to-gray-100 dark:from-slate-900 dark:to-gray-700 rounded-md px-10 py-6 shadow-2xl">
				<p>{modal.message}</p>
				<button
					className="button mt-8 ml-auto block"
					onClick={() => setModal({ open: false, message: "" })}
				>
					Okay !
				</button>
			</section>
		</main>
	);
};

export default Modal;
