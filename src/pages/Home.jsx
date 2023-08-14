import "./pagesStyle.css";
import GradientShape from "../components/GradientShape";
import { Link } from "react-router-dom";
import Carousel_Sec from "../components/Home/Carousel_Sec";
import JouneyInfo from "../components/Home/JouneyInfo";
import JoinInfo from "../components/Home/JoinInfo";
import HomeData from "/src/assets/homeData.js";
import { wavyShape, wavyShapeWeb } from "../assets/images";
const Home = () => {
	const journey_sec = HomeData.journey_sec;
	const join_sec = HomeData.join_sec;
	return (
		<div className='Home overflow-hidden min-h-[100vh]'>
			<div className='absolute left[100px] md:left-[400px]'>
				<GradientShape
					circleStyle={
						"-top-[100px] w-[200px] h-[200px] opacity-[0.6] blur-[10px] mix-blend-color-dodge"
					}
					gradients={["circle at center, var(--blue-main) 0%, #000 100%"]}
				/>
			</div>
			<div className='hidden md:block'>
				<GradientShape
					circleStyle={
						"top-0 right-0 w-[220px] h-[400px] opacity-[0.35] blur-[50px] mix-blend-color-dodge"
					}
					gradients={["circle at center, var(--blue-main) 50%, #000 100%"]}
				/>
			</div>
			<div className='container'>
				<main className='relative'>
					<div className='hidden xl:block'>
						<GradientShape
							circleStyle={
								"top-[53rem] right-[93%] w-[200px] h-[150px] opacity-[0.3] blur-[10px] mix-blend-color-dodge"
							}
							gradients={[
								"circle at center, var(--yellow-main) 10%, #000 100%",
							]}
						/>
					</div>
					<section className='hero_sec pt-[105px] lg:w-[600px] max-xl:w-full relative text-white '>
						<GradientShape
							circleStyle={
								"top-40 left-[120%] w-[150px] h-[150px] opacity-[0.4] blur-[10px] mix-blend-color-dodge"
							}
							gradients={[
								"circle at center, var(--yellow-main) 10%, #000 100%",
							]}
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
								High school can be a whirlwind of homework, exams, and social
								drama. And amidst all that, you &apos re expected to know what
								you want to do for the rest of your life? It's like asking a
								chameleon to pick a favorite color! But don't worry, we're here
								to help!
							</p>
						</div>
						<Carousel_Sec />
						<GradientShape
							circleStyle={
								"-left-[250px] bottom-0 w-[405.3px] h-[425.1px] opacity-[0.35] blur-[60px]"
							}
						/>
						<GradientShape
							circleStyle={
								"-right-[158px] bottom-0 top-[450px] w-[310px] h-[316.5px] opacity-[0.3] blur-[60px]"
							}
						/>
					</section>
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
								With a world of careers, majors, and colleges at your
								fingertips, let's make choosing feel less like rocket science
								and more like a fun road trip
							</p>
							<div className='journey_info pt-20 flex-col lg:flex-row gap-[6rem] flex items-center justify-between mt-[48px]'>
								{journey_sec.map((info) => (
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
								"-right-[150px] -top-[25px] w-[516px] h-[528px] opacity-50 blur-[60px]"
							}
						/>
					</section>
					<section
						data-aos='fade-up'
						data-aos-offset='400'
						data-aos-duration='500'
						className='join_info relative mt-[119px] flex flex-col'>
						<h2 className='flex justify-end font-bold text-[2.56rem] sm:text-[3.13rem] leading-[60px] uppercase mb-[63px]'>
							Why Join the <br /> Student Inc. Squad
						</h2>
						{join_sec.map((info) => (
							<JoinInfo
								key={info.id}
								id={info.id}
								img={info.img}
								head={info.head}
								info={info.info}
							/>
						))}
						<div className='moreJoin_info py-[100px] relative mt-[164px] sm:ms-[100px]'>
							<p
								data-aos='fade-right'
								data-aos-offset='300'
								data-aos-duration='500'
								className='w-full sm:w-[474px] shrink-0 text-[1.13rem] sm:text-[1.7rem]  font-medium'>
								We're not just a faceless company. We're students like you, who
								were tired of feeling lost and confused about our futures. So,
								we rolled up our sleeves and built Student Inc. to make the
								journey less daunting and more exciting.
							</p>
							<div
								data-aos='fade-left'
								data-aos-duration='400'
								className='img_container absolute bottom-1 sm:bottom-0 md:-bottom-[6rem] -z-10 -right-[11rem] xl:-right-[6rem]'>
								<picture>
									<source type='image/webp' srcSet={wavyShapeWeb}></source>
									<img
										className='rounded-[23px] opacity-60 md:opacity-100 scale-[1.7] md:scale-100'
										src={wavyShape}
										width='772px'
										height='431px'
										alt='Colorful wavy image representing XYZ'
									/>
								</picture>
							</div>
						</div>
						<GradientShape
							circleStyle={
								" left-[250px] top-[-25px] w-[394px] h-[403px] opacity-50 blur-[60px] "
							}
						/>
						<GradientShape
							circleStyle={
								"-left-[158px] bottom-[800px] w-[317px] h-[325px] opacity-50 blur-[60px] "
							}
						/>
						<GradientShape
							circleStyle={
								"left-[300px] bottom-[150px] w-[450px] h-[461px] opacity-50 blur-[60px] "
							}
						/>
					</section>
				</main>
			</div>
		</div>
	);
};

export default Home;
