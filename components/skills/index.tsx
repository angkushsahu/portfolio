import Frontend from "./frontend";
import Styles from "./styles";
import Backend from "./backend";
import Blockchain from "./blockchain";
import { IconContext } from "react-icons";

const Skills = () => {
	return (
		<section
			id="skills"
			className="min-h-[calc(100vh-3.75em)] flex flex-col justify-center px-4 smaller:px-6 pt-16 pb-24 sm:w-[84%] mx-auto"
		>
			<h1 className="text-center">Skills</h1>
			<IconContext.Provider value={{ size: "4em" }}>
				<div className="flex flex-col gap-16 mt-16">
					<Frontend />
					<Styles />
					<Backend />
					<Blockchain />
				</div>
			</IconContext.Provider>
		</section>
	);
};

export default Skills;
