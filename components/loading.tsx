const Loading = () => {
	return (
		<main className="min-h-screen fixed inset-0 z-40 bg-white/10 backdrop-blur-md flex items-center justify-center">
			<div className="loading">
				<div className="relative w-full h-full rounded-full">
					<span className="clock-hands"></span>
					<span className="clock-hands"></span>
				</div>
			</div>
		</main>
	);
};

export default Loading;
