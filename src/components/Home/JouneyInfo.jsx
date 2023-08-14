import { Link } from "react-router-dom";
const JouneyInfo = (props) => {
	return (
		<div className='flex flex-col justify-between'>
			<div className='relative img_container xs:ms-8 sm:ms-0 flex flex-row gap-2 lg:gap-0 lg:flex-col items-center justify-center lg:justify-end '>
				<div className='relative lg:h-[40px] font-bold  text-blue-light md:text-white text-[2.25rem] lg:mt-12 lg:mr-28'>
					<span className=''>{props.number}</span>
					<img
						width='50px'
						height='50px'
						className='absolute -top-12 lg:-top-3 -left-2 lg:-left-[4rem] text-[1.25rem]'
						src={props.img}
						alt='logo'
					/>
				</div>
				<h3 className='font-bold text-[1.88rem] xs:text-[40px] mb-0 lg:mb-[10px] text-white md:text-blue-secondary uppercase'>
					{props.head}
				</h3>
			</div>
			<div className='text-center'>
				<p className=' font-normal w-[80%] mx-auto text-[1rem] mb-[37px]'>
					{props.info}
				</p>
				<Link
					to='*'
					className='inline-block w-[186px] rounded bg-blue-brand py-[10px] px-[17px] shadow-light-ouset'>
					{props.txtBtn}
				</Link>
			</div>
		</div>
	);
};

export default JouneyInfo;
