import "./pagesStyle.css";
import GradientShape from "../components/GradientShape";
import { Link } from "react-router-dom";
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
				</main>
			</div>
		</div>
	);
};

export default Home;
