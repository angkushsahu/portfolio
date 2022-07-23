import { FC } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { IconContext } from "react-icons";
import { BsLinkedin } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { SiGithub } from "react-icons/si";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const SocialLinks: FC = () => {
	const { theme, setTheme } = useTheme();

	return (
		<section className="fixed left-6 bottom-0 hidden sm:flex flex-col items-center gap-6">
			<IconContext.Provider
				value={{ size: "1.6rem", color: theme === "dark" ? "#f3f4f6" : "#3f3f46" }}
			>
				{theme === "dark" ? (
					<MdLightMode className="cursor-pointer" onClick={() => setTheme("light")} />
				) : (
					<MdDarkMode className="cursor-pointer" onClick={() => setTheme("dark")} />
				)}
				<Link href="/#contact" className="bg-red-500">
					<IoMdMail className="cursor-pointer" />
				</Link>
				<a href="https://github.com/angkushsahu" rel="noopener noreferrer" target="_blank">
					<SiGithub className="cursor-pointer" />
				</a>
				<a
					href="hthttps://linkedin.com/in/angkush-sahu-0409311bb"
					rel="noopener noreferrer"
					target="_blank"
				>
					<BsLinkedin className="cursor-pointer" />
				</a>
			</IconContext.Provider>
			<span className="h-20 bg-zinc-600 dark:bg-gray-100 w-[3px]"></span>
		</section>
	);
};

export default SocialLinks;
