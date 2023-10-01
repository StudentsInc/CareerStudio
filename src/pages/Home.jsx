import "./pagesStyle.css";
import GradientShape from "../components/GradientShape";
import HomeData from "/src/assets/homeData.js";
import Footer from "../components/Footer/Footer";
import HeroSection from "../components/Home/HeroSection";
import CarouselSection from "../components/Home/CarouselSection";
import JourneySection from "../components/Home/JourneySection";
import JoinInfoSection from "../components/Home/JoinInfoSection";
import StoriesSection from "../components/Home/StoriesSection";
const Home = () => {
	const journey_sec = HomeData.journey_sec;
	const join_sec = HomeData.join_sec;
	return (
		<div className='Home overflow-hidden min-h-[100vh]'>
			<div className='absolute left[100px] md:left-[400px]'>
				<GradientShape
					circleStyle={
						"-top-[140px] w-[200px] h-[200px] opacity-[0.6] blur-[22px] mix-blend-color-dodge"
					}
					gradients='bg-gradient-radial from-blue-brand 0% to-black 100%'
				/>
			</div>
			<div className='hidden md:block'>
				<GradientShape
					circleStyle={
						"top-0 right-0 w-[220px] h-[400px] opacity-[1] blur-[50px] mix-blend-color-dodge"
					}
					gradients='bg-gradient-radial from-blue-brand 0% to-black 100%'
				/>
			</div>
			<div className='container'>
				<main className='relative'>
					<div className='hidden xl:block'>
						<GradientShape
							circleStyle={
								"top-[48rem] right-[92%] w-[250px] h-[250px] opacity-[0.4] blur-[0px] mix-blend-color-dodge"
							}
							gradients='bg-gradient-radial from-yellow-secondary 0% to-black 100%'
						/>
					</div>
					<HeroSection GradientShape={GradientShape} />
					<CarouselSection GradientShape={GradientShape} />
					<JourneySection
						GradientShape={GradientShape}
						journey_sec={journey_sec}
					/>
					<JoinInfoSection GradientShape={GradientShape} join_sec={join_sec} />
					<StoriesSection GradientShape={GradientShape} />
					<Footer />
				</main>
			</div>
		</div>
	);
};

export default Home;
