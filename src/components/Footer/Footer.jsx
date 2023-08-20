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
						"-left-[14rem] bottom-0 w-[450px] h-[461px] opacity-[0.7] blur-[147px]"
					}
				/>
			</div>
		</footer>
	);
};

export default Footer;
