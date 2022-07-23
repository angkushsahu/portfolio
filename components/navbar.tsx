import { FC, useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { IconContext } from "react-icons";
import { BsListNested } from "react-icons/bs";
import { ImCancelCircle } from "react-icons/im";
import { BsLinkedin } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { SiGithub } from "react-icons/si";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Navbar: FC = () => {
	const { theme, setTheme } = useTheme();
	const [toggleMobileNav, setToggleMobileNav] = useState<boolean>(false);
	const [changeBackground, setChangeBackground] = useState<boolean>(false);

	const toggleNavigation = () => {
		setToggleMobileNav(previousValue => false);
	};

	const changeNavBackground = () => {
		if (window.scrollY > 100) {
			setChangeBackground(previousValue => true);
		} else {
			setChangeBackground(previousValue => false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", changeNavBackground);
	}, []);

	return (
		<header
			className={`${
				changeBackground ? "bg-gray-100 dark:bg-slate-700 shadow-xl" : "bg-transparent"
			} transition-colors duration-500 sticky inset-0 flex items-center justify-end px-6 py-4 sm:px-16`}
		>
			{/* Desktop navigation */}
			<nav className="hidden sm:flex gap-8">
				<Link href="/#">
					<a className="font-primary-semibold transition-colors hover:text-black dark:hover:text-white">
						Home
					</a>
				</Link>
				<Link href="/#skills" className="font-primary-regular">
					<a className="font-primary-semibold transition-colors hover:text-black dark:hover:text-white">
						Skills
					</a>
				</Link>
				<Link href="/#projects" className="font-primary-regular">
					<a className="font-primary-semibold transition-colors hover:text-black dark:hover:text-white">
						Projects
					</a>
				</Link>
				<Link href="/#about" className="font-primary-regular">
					<a className="font-primary-semibold transition-colors hover:text-black dark:hover:text-white">
						About
					</a>
				</Link>
				<Link href="/#contact" className="font-primary-regular">
					<a className="font-primary-semibold transition-colors hover:text-black dark:hover:text-white">
						Contact
					</a>
				</Link>
			</nav>
			{/* Mobile navigation */}
			<BsListNested
				size={30}
				onClick={() => setToggleMobileNav(true)}
				className="cursor-pointer block sm:hidden text-zinc-800 dark:text-gray-300"
			/>
			<nav
				className={`bg-gray-100 dark:bg-slate-700 shadow-2xl fixed z-30 top-0 right-0 bottom-0 flex sm:hidden flex-col py-8 px-6 w-[16.5em] transition-transform duration-200 origin-right ${
					toggleMobileNav ? "scale-x-100" : "scale-x-0"
				}`}
			>
				<ImCancelCircle
					size={30}
					className="mb-6 mx-auto cursor-pointer text-zinc-800 dark:text-gray-300"
					onClick={toggleNavigation}
				/>
				<Link href="/#">
					<span className="py-2" onClick={toggleNavigation}>
						<a className="font-primary-semibold text-lg cursor-pointer">Home</a>
					</span>
				</Link>
				<Link href="/#skills" className="font-primary-regular">
					<span className="py-2" onClick={toggleNavigation}>
						<a className="font-primary-semibold text-lg cursor-pointer">Skills</a>
					</span>
				</Link>
				<Link href="/#projects" className="font-primary-regular">
					<span className="py-2" onClick={toggleNavigation}>
						<a className="font-primary-semibold text-lg cursor-pointer">Projects</a>
					</span>
				</Link>
				<Link href="/#about" className="font-primary-regular">
					<span className="py-2" onClick={toggleNavigation}>
						<a className="font-primary-semibold text-lg cursor-pointer">About</a>
					</span>
				</Link>
				<Link href="/#contact" className="font-primary-regular">
					<span className="py-2" onClick={toggleNavigation}>
						<a className="font-primary-semibold text-lg cursor-pointer">Contact</a>
					</span>
				</Link>
				<div className="fixed right-6 bottom-0 flex flex-col items-center gap-6">
					<IconContext.Provider
						value={{ size: "1.6rem", color: theme === "dark" ? "#f3f4f6" : "#3f3f46" }}
					>
						{theme === "dark" ? (
							<MdLightMode
								className="cursor-pointer"
								onClick={() => setTheme("light")}
							/>
						) : (
							<MdDarkMode
								className="cursor-pointer"
								onClick={() => setTheme("dark")}
							/>
						)}
						<Link href="/#contact" className="bg-red-500">
							<IoMdMail className="cursor-pointer" />
						</Link>
						<a
							href="https://github.com/angkushsahu"
							rel="noopener noreferrer"
							target="_blank"
						>
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
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
