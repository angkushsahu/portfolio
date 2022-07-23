export interface ProjectType {
	image: string;
	title: string;
	description: string;
	url: string;
	stack: string[];
}

export const projects: ProjectType[] = [
	{
		title: "CHAT-NATION",
		description:
			"Now stay connected to your loved ones with this real-time messaging application. This website offers fast message delivery and response. Add people to your friend list and stay connected with them.",
		image: "",
		url: "",
		stack: [
			"React",
			"Tailwind",
			"Node",
			"Express",
			"Socket.io",
			"Socket.io-client",
			"Mongo-DB",
		],
	},
	{
		title: "PACIFIO",
		description:
			"An online store where you can browse a number of products available. After successful login, user can purchase any product without any hassle. The payment method is secured with Stripe.",
		image: "https://res.cloudinary.com/dvhucdquc/image/upload/v1648674128/ProjectsHomeImages/Screenshot_228_tk9cf1.png",
		url: "",
		stack: ["React", "Tailwind", "Redux", "Node", "Express", "Stripe", "Mongo-DB"],
	},
	{
		title: "COIN-LAND",
		description:
			"Track coins and their progress in this app. Now you can add your favorite coin to your watchlist and track its progress in graphs. Know about coins which are on trend and which might make you a lot of profit. Do give it a try.",
		image: "https://res.cloudinary.com/dvhucdquc/image/upload/v1658428724/ProjectsHomeImages/coin-land_qifnen.png",
		url: "https://coin-land.netlify.app",
		stack: ["React", "Tailwind", "Firebase"],
	},
	{
		title: "ROBOPUNKS",
		description:
			"A demo NFT minting site where you can connect with Metamask and test ethers to mint NFTs. A user can mint upto 3 NFTs. This website is only created for demo purpose, so there's nothing amusing about this. 😅",
		image: "https://res.cloudinary.com/dvhucdquc/image/upload/v1648666838/ProjectsHomeImages/Screenshot_227_zehq6m.png",
		url: "https://robopunks.netlify.app",
		stack: ["React", "SASS", "Ethers", "Solidity", "Hardhat"],
	},
];
