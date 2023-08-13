const Button = ({ text, func, type, className }) => {
	return (
		<button className={className} type={type} onClick={func}>
			{text}
		</button>
	);
};
export default Button;
