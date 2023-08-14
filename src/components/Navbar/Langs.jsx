import { useState } from "react";

function LanguageSelector() {
	const [activeLang, setActiveLang] = useState("EN");

	return (
		<div className='langs font-inter divide-x-2 md:divide-gray-500'>
			<button
				className={`ps-0 px-4 text-[0.83rem] ${
					activeLang === "EN"
						? "font-bold text-white md:text-blue-text"
						: "text-white text-opacity-50 md:text-white md:text-opacity-100"
				}`}
				onClick={() => setActiveLang("EN")}>
				EN
			</button>
			<button
				className={`ps-4 text-[0.83rem] ${
					activeLang === "AR"
						? "font-bold text-white md:text-blue-text"
						: "text-white text-opacity-50 md:text-white md:text-opacity-100"
				}`}
				onClick={() => setActiveLang("AR")}>
				AR
			</button>
		</div>
	);
}

export default LanguageSelector;
