const JoinInfo = (props) => {
	return (
		<div className='join_info relative odd:ms-auto odd:self-end odd:mb-[100px]'>
			<img width='55px' height='55px' src={props.img} alt='logo' />
			<h3 className='font-bold  text-[2.13rem] text-white md:whitespace-break-spaces my-[10px]'>
				{props.head}
			</h3>
			<p className='w-[100%] sm:w-[467px] font-normal text-[1rem] mb-[37px]'>
				{props.info}
			</p>
			{props.id == 1 && (
				<div className='wavy-line after:w-[750.163px] after:h-[796.032px]  lg:after:absolute lg:after:content-[""] after:bg-[url("/src/assets/images/homePage/wavy/wavyLine.png")] after:left-[50px] after:top-[35px] after:bg-no-repeat after:bg-cover'></div>
			)}
		</div>
	);
};

export default JoinInfo;
