import React from "react";
import GradientShape from "../GradientShape";
import { Link } from "react-router-dom";

const HeroSection = () => {
	return (
		<section className='hero_sec pt-[75px] lg:w-[600px] max-xl:w-full relative text-white '>
			<GradientShape
				circleStyle={
					"top-40 left-[120%] w-[150px] h-[150px] opacity-[0.4] blur-[10px] mix-blend-color-dodge"
				}
				gradients={["circle at center, var(--yellow-secondary) 10%, #000 100%"]}
			/>
			<div data-aos='zoom-in' data-aos-duration='700'>
				<span className='tracking-[6px] font-normal text-[0.88rem]'>
					Discover Your Path with:
				</span>
				<h1 className='text-[2.81rem] sm:text-[5rem] mb-4 xs:mb-0 font-bold xs:leading-[97.52px]'>
					Career Studio
				</h1>
				<p className='info font-normal font-poppins text-[2rem] sm:text-[2.5rem]'>
					Unlock a World of Possibilities Tailored Just for
					<span className='special'> You</span>
				</p>
				<Link
					to='*'
					className='bg-blue-brand py-3 px-4 uppercase rounded text-[0.88rem] font-bold inline-block leading-[17.07px] mt-[36px] shadow-light-ouset'>
					start Your Journey
				</Link>
			</div>
		</section>
	);
};

export default HeroSection;
