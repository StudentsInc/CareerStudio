const GradientShape = (props) => {
	const defaultGradients = [
		"134deg, var(--yellow-main) 0%, var(--blue-main) 100%",
	];

	const gradientStyle =
		props.gradients && props.gradients.length > 0
			? props.gradients
					.map((gradient) => `radial-gradient(${gradient})`)
					.join(",")
			: defaultGradients
					.map((gradient) => `linear-gradient(${gradient})`)
					.join(",");
	return (
		<div
			className={`absolute transform -rotate-20 bg-cover bg-no-repeat rounded-full z-[-1] ${props.circleStyle}`}
			style={{ backgroundImage: gradientStyle }}></div>
	);
};

export default GradientShape;
