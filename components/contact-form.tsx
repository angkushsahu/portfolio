import { ChangeEvent, FormEvent, MutableRefObject, useContext, useRef, useState } from "react";
import { sendForm } from "@emailjs/browser";
import Context from "../state";
import validateEmail from "../utils/validateEmail";

interface ValueType {
	name: string;
	email: string;
	subject: string;
	message: string;
}
const ContactForm = ({ page }: { page: boolean }) => {
	const { setModal, setLoading } = useContext(Context);
	const formRef: MutableRefObject<HTMLFormElement> =
		useRef<HTMLFormElement>() as MutableRefObject<HTMLFormElement>;
	const [values, setValues] = useState<ValueType>({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setValues(previousValues => {
			return { ...values, [e.target.name]: e.target.value };
		});
	};

	const formSubmit = (e: FormEvent) => {
		e.preventDefault();

		if (!values.name || !values.email || !values.message) {
			window.alert("Please validate all the fields");
			return;
		}

		if (!validateEmail(values.email)) {
			window.alert("Please enter a valid e-mail");
			return;
		}

		setLoading(true);
		sendForm(
			String(process.env.SERVICE_ID),
			String(process.env.TEMPLATE_ID),
			formRef?.current,
			String(process.env.PUBLIC_KEY),
		)
			.then(() => {
				setLoading(false);
				setModal({ open: true, message: "E-mail sent to Angkush" });
				setValues({ name: "", email: "", subject: "", message: "" });
			})
			.catch(err => {
				setLoading(false);
				setModal({ open: true, message: "Unable to process e-mail, please try again" });
			});
	};

	const inputClass: string = page
		? `bg-transparent outline-none border-2 border-slate-500 dark:border-slate-400 rounded px-4 py-2 text-base w-full`
		: `outline-none bg-slate-200 dark:bg-slate-600 rounded px-4 py-2 text-base w-full`;

	return (
		<form
			ref={formRef}
			onSubmit={formSubmit}
			className="flex flex-col gap-8 w-full mx-auto mt-12"
		>
			<div className="flex items-center justify-center flex-col md:flex-row gap-8">
				<input
					name="name"
					id="name"
					type="text"
					placeholder="Name"
					value={values.name}
					onChange={handleInputChange}
					className={inputClass}
					required
				/>
				<input
					name="email"
					id="email"
					type="email"
					placeholder="E-mail"
					value={values.email}
					onChange={handleInputChange}
					className={inputClass}
					required
				/>
			</div>
			<input
				name="subject"
				id="subject"
				type="text"
				placeholder="Subject"
				value={values.subject}
				onChange={handleInputChange}
				className={inputClass}
				required
			/>
			<textarea
				name="message"
				id="message"
				placeholder="Message"
				value={values.message}
				onChange={handleInputChange}
				className={`resize-none h-32 ${inputClass}`}
				required
			></textarea>
			<button type="submit" className="button px-16 mx-auto">
				Send
			</button>
		</form>
	);
};

export default ContactForm;
