import { SiMaterialui, SiTailwindcss, SiSass, SiCss3 } from "react-icons/si";
import SkillLayout from "./skill-layout";

const Styles = () => {
	return (
		<SkillLayout title="Styling">
			<div className="skill_container">
				<SiCss3 color="#2963f2" />
				<p>CSS</p>
			</div>
			<div className="skill_container">
				<SiSass color="#bd5e8a" />
				<p>SASS</p>
			</div>
			<div className="skill_container">
				<SiTailwindcss color="#06b5d4" />
				<p>Tailwind CSS</p>
			</div>
			<div className="skill_container">
				<SiMaterialui color="#0083ca" />
				<p>Material UI</p>
			</div>
		</SkillLayout>
	);
};

export default Styles;
