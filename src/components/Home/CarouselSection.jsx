import React from "react";
import Carousel_Sec from "./Carousel_Sec";

const CarouselSection = ({ GradientShape }) => {
	return (
		<section className='carousel_sec pt-[277px] pb-[4rem] xs:pb-[235px] relative'>
			<div className='hidden md:block'>
				<GradientShape
					circleStyle={
						"top-0 right-[15%] w-[300px] h-[300px] opacity-[0.6] blur-[20px] mix-blend-color-dodge"
					}
					gradients={["circle at center, var(--blue-main) 0%, #000 100%"]}
				/>
			</div>
			<div className='Head flex items-end flex-col mb-[52px]'>
				<h2 className='uppercase font-bold text-[2.56rem] sm:text-[3.8rem] sm:w-[611px] pb-[30px]'>
					Confused About Your Future?
				</h2>
				<p className='font-normal font-poppins opacity-40 text-[1rem] sm:w-[546px]'>
					High school can be a whirlwind of homework, exams, and social drama.
					And amidst all that, you &apos re expected to know what you want to do
					for the rest of your life? It's like asking a chameleon to pick a
					favorite color! But don't worry, we're here to help!
				</p>
			</div>
			<Carousel_Sec />
			<GradientShape
				circleStyle={
					"-left-[250px] bottom-0 w-[405.3px] h-[425.1px] opacity-[0.6] blur-[131px]"
				}
			/>
			<GradientShape
				circleStyle={
					"-right-[158px] bottom-0 top-[450px] w-[310px] h-[316.5px] opacity-[0.6] blur-[147px]"
				}
			/>
		</section>
	);
};

export default CarouselSection;
