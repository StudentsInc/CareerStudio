import React from "react";
import {
	interest1,
	interest2,
	interest3,
	interest4,
	interest5,
	interest6,
} from "../../assets/images";
import Interest from "./interest";
const Interests = () => {
	return (
		<div className='w-full flex flex-col gap-y-[27px]'>
			<div className='flex justify-evenly items-center'>
				<Interest img={interest1} txt='Persuader' />
				<Interest img={interest2} txt='Thinker' />
			</div>
			<div className='flex justify-between items-center'>
				<Interest img={interest3} txt='Creater' />
				<Interest img={interest4} txt='Doer' />
			</div>
			<div className='flex justify-evenly items-center'>
				<Interest img={interest5} txt='Helper' />
				<Interest img={interest6} txt='Organizer' />
			</div>
		</div>
	);
};

export default Interests;
