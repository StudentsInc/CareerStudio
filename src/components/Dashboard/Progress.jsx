import React, { useState } from "react";

const Progress = ({ progress }) => {
	// const [progress, setProgress] = useState(30);
	return (
		<div className='relative w-[97%] mx-auto h-[6px] rounded-full bg-gray-progress'>
			<div
				style={{ width: `${progress}%` }}
				className='absolute left-0 bg-blue-progress drop-shadow-[0_0_13.5px_#6097ff] rounded-full top-0 h-full z-2'></div>
		</div>
	);
};

export default Progress;
