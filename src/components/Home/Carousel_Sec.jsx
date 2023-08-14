import HomeData from "/src/assets/homeData.js";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../../pages/pagesStyle.css";
const Carousel_Sec = () => {
	const contents = HomeData.carouselContents;
	return (
		<div className='carousel'>
			<Swiper
				style={{ overflow: "visible" }}
				spaceBetween={200}
				slidesPerView={1}
				pagination={{ clickable: true }}
				grabCursor={true}
				modules={[Pagination]}>
				{contents.map((content, index) => (
					<SwiperSlide className='flex justify-between' key={index}>
						<div className='flex flex-col lg:flex-row gap-y-12 items-center justify-between gap-10'>
							<div
								data-aos='fade-right'
								data-aos-offset='300'
								data-aos-duration='600'
								className='info sm:w-[472px] ms-[4rem] relative'>
								<h3 className='font-medium text-[2rem] pt-[18px] mb-[18px]'>
									{content.title}
								</h3>
								<p className='font-normal text-[1rem] mb-[56px] lg:w-[391px] leading-[26.88px]'>
									{content.description}
								</p>
								<Link
									to='*'
									className='bg-blue-brand inline-block text-center py-[10px] px-[17px] w-[186px] rounded shadow-light-ouset'>
									{content.buttonText}
								</Link>
								<div className='absolute start-[-4rem] font-bold top-[-6rem] z-[-10]'>
									<span className='text-blue-secondary text-[18.75rem] h-[463px] rounded-full cursor-pointer'>
										{content.number}
									</span>
								</div>
							</div>
							<div
								data-aos='fade-left'
								data-aos-offset='100'
								data-aos-duration='500'
								className='img_container'>
								<div className='relative p-2 w-100 shadow-[0px_12px_45px_0px] shadow-blue-secondary/50'>
									<picture>
										<source
											type='image/webp'
											srcSet={content?.imageWebp}></source>
										<img
											className='rounded-lg shadow-md w-[596px] lg:h-[336px] object-cover'
											width={"596px"}
											height={"336px"}
											src={content?.imagePng}
											alt={content?.alt}
										/>
									</picture>
									<div className='absolute top-0 left-0 right-0 bottom-0 border border-y-[12px] border-x-[10px] border-black rounded-lg'></div>
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default Carousel_Sec;
