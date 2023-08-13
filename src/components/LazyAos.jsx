import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const LazyAOS = () => {
	useEffect(() => {
		AOS.init();
	}, []);

	return null; // The component doesn't render anything
};

export default LazyAOS;
