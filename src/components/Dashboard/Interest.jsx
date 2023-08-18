import React from "react";

const Interest = ({ img, txt }) => {
	return (
		<div className='flex flex-col items-center gap-y-[9.7px]'>
			<img width='71px' height='71px' src={img} alt='interest' />
			<h2>{txt}</h2>
		</div>
	);
};

export default Interest;
