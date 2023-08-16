const GradientShape = (props) => {
	const defaultGradients = [
		"circle at center, var(--yellow-main), transparent 70%",
		"circle at bottom, var(--blue-main), transparent 100%",
	];

	const gradientStyle =
		props.gradients && props.gradients.length > 0
			? props.gradients
					.map((gradient) => `radial-gradient(${gradient})`)
					.join(",")
			: defaultGradients
					.map((gradient) => `radial-gradient(${gradient})`)
					.join(",");
	return (
		<div
			className={`absolute transform -rotate-20 bg-cover bg-no-repeat rounded-full z-[-1] ${props.circleStyle}`}
			style={{ backgroundImage: gradientStyle }}></div>
	);
};

export default GradientShape;
