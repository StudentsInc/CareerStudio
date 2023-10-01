import React from "react";
import JouneyInfo from "./JouneyInfo";
const JourneySection = ({ GradientShape, journey_sec }) => {
	return (
		<section
			data-aos='fade-up'
			data-aos-duration='600'
			data-aos-offset='300'
			data-aos-delay='50'
			className='journey relative'>
			<h2 className='font-bold text-[2.56rem] sm:text-[3.43rem] md:w-[893px] mb-[15px] uppercase'>
				<span className='text-blue-secondary'>Your</span> Journey,
				<span className='text-blue-secondary'> Your</span> Choices!
			</h2>
			<div>
				<p className='font-normal ms-auto text-[1.25rem] sm:w-[546px]'>
					With a world of careers, majors, and colleges at your fingertips,
					let's make choosing feel less like rocket science and more like a fun
					road trip
				</p>
				<div className='journey_info pt-20 flex-col lg:flex-row gap-[6rem] flex items-center justify-between mt-[48px]'>
					{journey_sec &&
						journey_sec.map((info) => (
							<JouneyInfo
								key={info.id}
								id={info.id}
								img={info.img}
								number={info.number}
								head={info.head}
								info={info.info}
								txtBtn={info.txtBtn}
							/>
						))}
				</div>
			</div>
			<GradientShape
				circleStyle={
					"-right-[150px] -top-[25px] w-[516px] h-[528px] opacity-[0.6] blur-[147px]"
				}
			/>
		</section>
	);
};

export default JourneySection;
