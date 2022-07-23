import { SiReact } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import SkillLayout from "./skill-layout";

const Frontend = () => {
	return (
		<SkillLayout title="Frontend">
			<div className="skill_container">
				<SiReact color="#60cee9" />
				<p>React</p>
			</div>
			{/* White in dark mode and dark in light mode */}
			<div className="skill_container">
				<TbBrandNextjs />
				<p>Next</p>
			</div>
		</SkillLayout>
	);
};

export default Frontend;
