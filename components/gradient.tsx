const Gradient = () => {
	return (
		<div className="fixed right-96 top-56 -z-20">
			<div className="relative w-full max-w-lg">
				{/* Dark mode */}
				{/* Light mode */}
				<div className="absolute top-52 left-60 sm:top-0 sm:left-32 lg:-left-4 w-32 h-32 sm:w-48 sm:h-48 lg:w-72 lg:h-72 bg-purple-400 dark:bg-purple-800 rounded-full filter blur-xl mix-blend-multiply animate-blob"></div>
				<div className="absolute top-52 sm:top-0 -right-60 sm:-right-48 lg:-right-4 w-32 h-32 sm:w-48 sm:h-48 lg:w-72 lg:h-72 bg-yellow-300 dark:bg-gray-600 rounded-full filter blur-xl mix-blend-multiply animate-blob animation-delay-2"></div>
				<div className="absolute top-64 sm:top-20 lg:top-10 left-36 sm:left-20 lg:-left-40 w-32 h-32 sm:w-48 sm:h-48 lg:w-72 lg:h-72 bg-pink-300 dark:bg-gray-400 rounded-full filter blur-xl mix-blend-multiply animate-blob animation-delay-4"></div>
			</div>
		</div>
	);
};

export default Gradient;
