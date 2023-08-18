import React from "react";

const StyleLearn = ({ txt }) => {
	return (
		<div className='flex flex-col gap-y-[13.6px] items-center opacity-20'>
			<div className='w-[100px] h-[100px]  bg-gradient-to-r from-yellow-main to-blue-brand drop-shadow-[0_0_13.5px_#6097ff] rounded-full opacity-100'></div>
			<h3 className='text-[18px] font-bold tracking-[0.3px]'>{txt}</h3>
		</div>
	);
};

export default StyleLearn;
