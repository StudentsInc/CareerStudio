import CircleShape from "../GradientShape";
import BottomFooter from "./BottomFooter";
import TopFooter from "./TopFooter";
const Footer = () => {
	return (
		<footer className='mt-[100px] md:px-[50px] xl:px-[135px] relative'>
			<TopFooter />
			<BottomFooter />
			<div className='hidden md:block'>
				<CircleShape
					circleStyle={
						"-left-[12rem] bottom-0 w-[450px] h-[461px] opacity-50 blur-[60px] "
					}
					gradients={[
						"circle at center, var(--yellow-color), transparent 70%",
						"circle at bottom, var(--blue-main), transparent 100%",
					]}
				/>
			</div>
		</footer>
	);
};

export default Footer;
