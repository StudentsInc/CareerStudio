import React from "react";
import "../pages/pagesStyle.css";
const Loader = () => {
	return (
		<div className='fixed inset-0 bg-black/60 opacity-100 z-10'>
			<div className='loader-spinner w-[200px] h-[200px] fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-transparent z-50'>
				<div className='loader flex justify-center'>
					<div className='absolute w-[150px] h-[150px] rounded-full shadow-[0_4px_0_0_#4c7cee] top-[20px] top-[20px] origin-[75px_77px]'></div>
				</div>
			</div>
		</div>
	);
};

export default Loader;
