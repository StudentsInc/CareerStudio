import "./pagesStyle.css";
import GradientShape from "../components/GradientShape";
import { Link } from "react-router-dom";
import Carousel_Sec from "../components/Home/Carousel_Sec";
import JouneyInfo from "../components/Home/JouneyInfo";
import JoinInfo from "../components/Home/JoinInfo";
import HomeData from "/src/assets/homeData.js";
import {
	person1,
	person2,
	person3,
	person4,
	person5,
	person6,
	person7,
	wavyShape,
	wavyShape3XL,
	wavyShapeWeb,
} from "../assets/images";
import GoldStar from "../components/Home/GoldStart";
import Footer from "../components/Footer/Footer";
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
								"circle at center, var(--yellow-secondary) 10%, #000 100%",
							]}
						/>
					</div>
					<section className='hero_sec pt-[75px] lg:w-[600px] max-xl:w-full relative text-white '>
						<GradientShape
							circleStyle={
								"top-40 left-[120%] w-[150px] h-[150px] opacity-[0.4] blur-[10px] mix-blend-color-dodge"
							}
							gradients={[
								"circle at center, var(--yellow-secondary) 10%, #000 100%",
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
								"-left-[250px] bottom-0 w-[405.3px] h-[425.1px] opacity-[0.6] blur-[131px]"
							}
						/>
						<GradientShape
							circleStyle={
								"-right-[158px] bottom-0 top-[450px] w-[310px] h-[316.5px] opacity-[0.6] blur-[147px]"
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
								"-right-[150px] -top-[25px] w-[516px] h-[528px] opacity-[0.6] blur-[147px]"
							}
						/>
					</section>
					<section
						data-aos='fade-up'
						data-aos-offset='400'
						data-aos-duration='500'
						className='join_info relative mt-[119px] flex flex-col'>
						<h2 className='flex justify-end font-bold text-[2.56rem] sm:text-[3.13rem] uppercase mb-[63px]'>
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
						<div className='moreJoin_info py-[150px] relative md:my-[164px] sm:ms-[100px]'>
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
								data-aos-offset='400'
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
					<section className='stories mt-[101px] relative'>
						<h2 className='text-[2.56rem] sm:text-[3.8rem] font-bold uppercase'>
							Real Success Stories
						</h2>
						<p className='font-normal text-[1rem] sm:w-[422px] leading-[19.5px] ms-[4rem]'>
							Don't just take our word for it. Check out stories from students
							just like you who found their perfect career match and are now on
							the road to success
						</p>
						<div className='stories_info mt-[53px] flex  md:flex-col-reverse lg:flex-row items-center justify-between'>
							<div
								data-aos='fade-right'
								data-aos-offset='300'
								data-aos-duration='500'
								className='info'>
								<div className='stars mb-[15px] flex items-center gap-[6.6px]'>
									<GoldStar />
									<GoldStar />
									<GoldStar />
									<GoldStar />
									<GoldStar />
								</div>
								<p className='w-full text-[1.16rem] sm:w-[567px] font-normal leading-[25.96px]'>
									“I've been using this service for over a year and I'm really
									impressed with the uptime and support. The website has never
									gone down and the customer service is always quick to help
									with any issues I have. Highly recommend!”
								</p>
								<div className='story_name mt-[31px]'>
									<h3 className='work_name mb-[10px] italic  font-bold text-[1.25rem] leading-[24.38px]'>
										Freelance Designer
									</h3>
									<span className='person_name text-[1rem] leading-[19.5px] font-normal'>
										Jane Smith
									</span>
								</div>
							</div>
							<div
								data-aos='fade-left'
								data-aos-offset='200'
								data-aos-duration='700'
								data-aos-delay='200'
								className='gallery hidden md:grid grid grid-cols-3 grid-rows-auto h-full mx-auto transition duration-500 gap-x-[20px]'>
								<div className='HolderImage self-center grid gap-y-[20px]'>
									<figure className='gallery-item1 w-[126px] h-[126px]'>
										<img
											className='w-full h-full object-cover'
											src={person4}
											alt='photo'
										/>
									</figure>
									<figure className='gallery-item2 w-[126px] h-[126px]'>
										<img
											className='w-full h-full object-cover'
											src={person7}
											alt='photo'
										/>
									</figure>
								</div>
								<div className='HolderImage self-center grid gap-y-[20px] relative'>
									<figure className='gallery-item1 w-[126px] h-[126px]'>
										<img
											className='w-full h-full object-cover'
											src={person2}
											alt='photo'
										/>
									</figure>
									<figure className='gallery-item4 w-[126px] h-[126px]'>
										<img
											className='w-full h-full object-cover'
											src={person5}
											alt='photo'
										/>
									</figure>
									<figure className='gallery-item5 w-[175px] h-[175px] scale-125 xl:scale-150 absolute bottom-10 left-[-25px]'>
										<img
											className='w-full h-full object-cover '
											src={person1}
											alt='photo'
										/>
									</figure>
									<figure className='gallery-item6 h-[175px]'></figure>
								</div>
								<div className='HolderImage self-center grid gap-y-[20px]'>
									<figure className='gallery-item1 w-[126px] h-[126px]'>
										<img
											className='w-full h-full object-cover'
											src={person3}
											alt='photo'
										/>
									</figure>
									<figure className='gallery-item2 w-[126px] h-[126px]'>
										<img
											className='w-full h-full object-cover'
											src={person6}
											alt='photo'
										/>
									</figure>
								</div>
							</div>
						</div>
						<GradientShape
							circleStyle={
								"right-[250px] top-[0px] w-[450px] h-[461px] opacity-[0.7] blur-[147px]"
							}
						/>
					</section>
					<Footer />
				</main>
			</div>
		</div>
	);
};

export default Home;
