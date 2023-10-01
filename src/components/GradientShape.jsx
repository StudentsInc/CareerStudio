const GradientShape = (props) => {
	const gradientStyle = props.gradients
		? props.gradients
		: `bg-gradient-to-b from-yellow-main from-15% to-blue-brand to-87.09%`;
	return (
		<div
			className={`absolute transform -rotate-45 bg-cover bg-no-repeat rounded-full z-[-1] ${props.circleStyle} ${gradientStyle}`}></div>
	);
};

export default GradientShape;
