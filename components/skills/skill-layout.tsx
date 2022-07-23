import { FC, ReactNode } from "react";

interface SkillLayoutProps {
	title: string;
	children: ReactNode;
}

const SkillLayout: FC<SkillLayoutProps> = ({ title, children }) => {
	return (
		<div className="flex flex-col justify-center gap-3">
			<h2 className="text-center">{title}</h2>
			<div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 sm:px-8">
				{children}
			</div>
		</div>
	);
};

export default SkillLayout;
