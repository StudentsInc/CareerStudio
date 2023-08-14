import "./pagesStyle.css";
import GradientShape from "../components/GradientShape";
import { Link } from "react-router-dom";
import Carousel_Sec from "../components/Home/Carousel_Sec";
const Home = () => {
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
				</main>
			</div>
		</div>
	);
};

export default Home;
