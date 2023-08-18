import React from "react";
import StyleLearn from "./StyleLearn";

const LearningStyle = () => {
	return (
		<div className='w-full flex flex-col gap-[80.5px]  lg:[px-0]  xl:px-[1rem] '>
			<div className='flex justify-between'>
				<StyleLearn txt='Visual' />
				<StyleLearn txt='Read & Write' />
			</div>
			<div className='flex justify-between'>
				<StyleLearn txt='Auditory' />
				<StyleLearn txt='Tactile' />
			</div>
		</div>
	);
};

export default LearningStyle;
