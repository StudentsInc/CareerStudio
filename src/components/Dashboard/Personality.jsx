import React from "react";
import Progress from "./Progress";

const Personality = ({ title, subTitle1, subTitle2, progress }) => {
	return (
		<div className='personality w-full mb-[1rem]'>
			<h2 className='font-bold mb-[7.3px]'>{title}</h2>
			<div className='flex justify-between items-center mb-[12.8px]'>
				<span className='text-[9.4px] font-normal'>{subTitle1}</span>
				<span className='text-[9.4px] font-normal'>{subTitle2}</span>
			</div>
			<Progress progress={progress} />
		</div>
	);
};

export default Personality;
