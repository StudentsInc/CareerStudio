import React from "react";
import JoinInfo from "./JoinInfo";
import { wavyShape, wavyShape3XL, wavyShapeWeb } from "../../assets/images";
const JoinInfoSection = ({ GradientShape, join_sec }) => {
	return (
		<section
			data-aos='fade-up'
			data-aos-offset='400'
			data-aos-duration='500'
			className='join_info relative mt-[119px] flex flex-col'>
			<h2 className='flex justify-end font-bold text-[2.56rem] sm:text-[3.13rem] uppercase mb-[63px]'>
				Why Join the <br /> Student Inc. Squad
			</h2>
			{join_sec &&
				join_sec.map((info) => (
					<JoinInfo
						key={info.id}
						id={info.id}
						img={info.img}
						head={info.head}
						info={info.info}
					/>
				))}
			<div className='moreJoin_info py-[150px] relative md:my-[164px] sm:ms-[100px]'>
				<p
					data-aos='fade-right'
					data-aos-offset='300'
					data-aos-duration='500'
					className='w-full sm:w-[474px] shrink-0 text-[1.13rem] sm:text-[1.7rem]  font-medium'>
					We're not just a faceless company. We're students like you, who were
					tired of feeling lost and confused about our futures. So, we rolled up
					our sleeves and built Student Inc. to make the journey less daunting
					and more exciting.
				</p>
				<div
					data-aos='fade-left'
					data-aos-offset='300'
					data-aos-duration='500'
					className='img_container absolute bottom-1 sm:bottom-0 md:-bottom-[6rem] -z-10 -right-[11rem] xl:-right-[6rem]'>
					<picture width='772px'>
						<source
							type='image/webp'
							media='(min-width: 767px)'
							srcSet={wavyShapeWeb}></source>
						<source
							type='image/png'
							media='(max-width: 768px)'
							srcSet={wavyShape3XL}></source>
						<img
							className='rounded-[23px] opacity-60 md:opacity-100 scale-[1.7] md:scale-100'
							src={wavyShape}
							width='100%'
							height='100%'
							alt='Colorful wavy image representing XYZ'
						/>
					</picture>
				</div>
			</div>
			<GradientShape
				circleStyle={
					" left-[350px] top-[60px] w-[394px] h-[403px] opacity-[0.7] blur-[122px] "
				}
			/>
			<GradientShape
				circleStyle={
					"-left-[158px] bottom-[800px] w-[317px] h-[325px] opacity-[0.7] blur-[98px] "
				}
			/>
			<GradientShape
				circleStyle={
					"left-[300px] bottom-[150px] w-[450px] h-[461px] opacity-[0.7] blur-[147px] "
				}
			/>
		</section>
	);
};

export default JoinInfoSection;
