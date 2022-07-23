import { SiExpress, SiMongodb, SiNodedotjs } from "react-icons/si";
import SkillLayout from "./skill-layout";

const Backend = () => {
	return (
		<SkillLayout title="Backend">
			<div className="skill_container">
				<SiNodedotjs color="#8ac400" />
				<p>Node</p>
			</div>
			<div className="skill_container">
				<SiExpress />
				<p>Express</p>
			</div>
			<div className="skill_container">
				<SiMongodb color="#4c9543" />
				<p>Mongo DB</p>
			</div>
		</SkillLayout>
	);
};

export default Backend;
