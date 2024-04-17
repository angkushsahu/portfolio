import { displayProjectUrl } from "@/constants";

export type ProjectType = {
   title: string;
   url: string;
   liveLink: string;
   githubLink: string;
   type: string;
   technologies: Array<string>;
   coverImg: string;
   description: string;
   features: Array<string>;
};

export const projects: Array<ProjectType> = [
   {
      title: "Pacifio",
      url: `${displayProjectUrl}/pacifio`,
      liveLink: "https://pacifio.vercel.app",
      githubLink: "https://github.com/angkushsahu/pacifio-client",
      type: "Full Stack Project",
      technologies: ["Typescript", "Next", "Tailwind", "Radix UI", "Nest", "Express", "MongoDB"],
      coverImg: "https://res.cloudinary.com/dvhucdquc/image/upload/v1707900980/projects/abenm3dkfqxj5vnp1t2y.webp",
      description:
         "Pacifio is an online store catering to gamers and coders, offering a variety of accessories to enhance their gaming or coding setups. The platform boasts a user-friendly interface and fast performance for seamless shopping experience",
      features: [
         "Rigorous validation of incoming data from clients to servers and vice versa to ensure only desired variables are passed, enhancing security",
         "Implemented robust error handling strategies in both client-side and backend to provide graceful error messages and enhance user experience",
         "Leveraged TypeScript for type safety in both client and server-side code, reducing runtime errors and enhancing code maintainability",
         "Incorporated loading states for all pages to provide feedback to users during data fetching processes, improving UX",
         "Ensured fast API responses and overall performance through optimized code and efficient database querying practices",
         "Designed an intuitive and user-friendly UI to facilitate easy navigation and enhance user engagement",
      ],
   },
   {
      title: "Products API",
      url: `${displayProjectUrl}/products-api`,
      liveLink: "https://products.cyclic.app",
      githubLink: "https://github.com/angkushsahu/products-api",
      type: "Backend Project",
      technologies: ["Typescript", "Node", "Express", "MongoDB"],
      coverImg: "https://res.cloudinary.com/dvhucdquc/image/upload/v1707900980/projects/cczqdndhcmupbnb7ekvg.webp",
      description:
         "Products API is a backend project designed to provide fake data for e-commerce stores for frontend-only developers. It focuses on delivering accurate data efficiently to support frontend e-commerce projects",
      features: [
         "Implemented thorough validation of incoming and outgoing data to prevent unauthorized access and ensure data integrity",
         "Utilized proper database querying techniques to retrieve relevant data efficiently, enhancing API performance",
         "Leveraged TypeScript for type safety, reducing the likelihood of runtime errors and improving code maintainability",
         "Prioritized speed in data retrieval and API responses to provide a seamless experience for consumers",
         "Adhered to best practices for database operations to ensure reliability, scalability, and security",
      ],
   },
   {
      title: "Coinland",
      url: `${displayProjectUrl}/coinland`,
      liveLink: "https://coin-land.netlify.app",
      githubLink: "https://github.com/angkushsahu/coin-land",
      type: "Frontend Project",
      technologies: ["Typescript", "React", "CSS", "Firebase"],
      coverImg: "https://res.cloudinary.com/dvhucdquc/image/upload/v1707900980/projects/pedevzmsuqa7i0qeukzp.webp",
      description:
         "Coinland is a web platform where users can explore different cryptocurrencies, gather information about specific coins, and track their favorite tokens using a watchlist feature",
      features: [
         "Utilized Coingecko API for accurate cryptocurrency data retrieval, ensuring users have access to up-to-date information",
         "Integrated Firebase authentication for secure user authentication and personalized experiences",
         "Designed an elegant and intuitive UI for seamless navigation and enhanced user experience",
         "Implemented a watch token feature allowing users to track their favorite cryptocurrencies conveniently",
      ],
   },
   {
      title: "Number Clue",
      url: `${displayProjectUrl}/number-clue`,
      liveLink: "https://numberclue.netlify.app",
      githubLink: "https://github.com/angkushsahu/guessing-game",
      type: "Frontend Project",
      technologies: ["Typescript", "React", "CSS"],
      coverImg: "https://res.cloudinary.com/dvhucdquc/image/upload/v1707900980/projects/rsyofdtbhbuiis8aarpy.webp",
      description:
         "Number Clue is a number guessing game where players are provided with upper and lower limits, aiming to guess the secret number within a specified range. It offers a fun and challenging gameplay experience",
      features: [
         "Implemented proper input validation to ensure user inputs are within the specified range and format",
         "Provided feedback after each guess, informing players if their guess is too high or too low, enhancing the gaming experience",
         "Designed as a fun and engaging game to provide entertainment and challenge to players",
         "Ensured quick responses and smooth gameplay to keep players engaged and entertained",
      ],
   },
   {
      title: "Konohagakure",
      url: `${displayProjectUrl}/konohagakure`,
      liveLink: "https://konohagakure.netlify.app",
      githubLink: "https://github.com/angkushsahu/konohagakure",
      type: "Frontend Project",
      technologies: ["Typescript", "React", "Sass"],
      coverImg: "https://res.cloudinary.com/dvhucdquc/image/upload/v1707900980/projects/iqmfgmiay6rkugkhbild.webp",
      description:
         "Konohagakure is a frontend-only project showcasing beautiful UI designs and engaging SVG animations. It offers a delightful browsing experience for anime enthusiasts",
      features: [
         "Utilized the Jikan API for fetching anime data, ensuring up-to-date information for users",
         "Implemented proper pagination techniques for smoother navigation through anime listings",
         "Designed captivating SVG animations and a visually appealing UI to enhance user engagement",
         "Focused solely on frontend development to prioritize UI/UX excellence without the complexity of backend functionality",
      ],
   },
   {
      title: "Halloween",
      url: `${displayProjectUrl}/halloween`,
      liveLink: "https://halloween-night.netlify.app",
      githubLink: "https://github.com/angkushsahu/halloween",
      type: "Frontend Project",
      technologies: ["HTML", "CSS", "Javascript"],
      coverImg: "https://res.cloudinary.com/dvhucdquc/image/upload/v1707900980/projects/wohjbuo38icto2rb5k4k.webp",
      description:
         "Halloween is a frontend-only project with a focus on delivering a visually stunning UI, perfect for showcasing Halloween-themed designs and aesthetics",
      features: [
         "Concentrated solely on frontend development to deliver a polished and immersive user interface without backend complexities",
         "Ensured the UI is responsive and compatible across various devices for a seamless user experience",
         "Adhered to accessibility standards to ensure the project is inclusive and usable for all users",
      ],
   },
];

export function getProjectById(id: string) {
   for (let i = 0; i < projects.length; i++) {
      const currentUrl = `${displayProjectUrl}/${id}`;
      if (projects[i].url === currentUrl) return projects[i];
   }
   return null;
}
