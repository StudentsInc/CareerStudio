import { useState, useEffect } from "react";
import { FiArrowUp } from "react-icons/fi";
const BtnToTop = () => {
	const [isVisible, setIsVisible] = useState(false);

	// Show the button when the user scrolls down 100px
	const handleScroll = () => {
		if (window.pageYOffset > 700) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<>
			{isVisible && (
				<button
					className='fixed  bottom-8 xs-bottom-6 bg-gradient-to-b from-blue-brand to-yellow-main z-10 pointer right-3 xs:right-6 bg-blue-500 hover:bg-blue-600 text-white px-2 py-2 rounded-full shadow'
					onClick={scrollToTop}>
					<FiArrowUp size={20} />
				</button>
			)}
		</>
	);
};

export default BtnToTop;
