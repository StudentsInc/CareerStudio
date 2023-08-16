import { Link } from "react-router-dom";
import Subscribe from "./Subscribe";

const TopFooter = () => {
	return (
		<div className='top_footer flex flex-col-reverse lg:flex-row justify-between items-center lg:gap-[100px] lg:gap-[135px] xl:pb-[63px]'>
			<div className='links w-full flex flex-col xs:flex-row lg:gap-6 xl:gap-0 justify-between flex-1 mt-20'>
				<div className='footer_column'>
					<h4 className='text-[1rem] font-bold leading-[28px] mb-[15px]'>
						Product
					</h4>
					<ul>
						<li className='text-[0.88rem] font-medium leading-[17.07px] mb-[15px]'>
							<Link to='/career-library'>Career Library</Link>
						</li>
						<li className='text-[0.88rem] font-medium leading-[17.07px] mb-[15px]'>
							<Link to='/major-library'>Major Library</Link>
						</li>
						<li className='text-[0.88rem] font-medium leading-[17.07px] mb-[15px]'>
							<Link to='/college-library'>College Library</Link>
						</li>
						<li className='text-[0.88rem] font-medium leading-[17.07px] mb-[15px]'>
							<Link to='/personality-assessment'>Personality Assessment</Link>
						</li>
						<li className='text-[0.88rem] font-medium leading-[17.07px] mb-[15px]'>
							<Link to='/interests-assessment'>Interests Assessment</Link>
						</li>
						<li className='text-[0.88rem] font-medium leading-[17.07px] mb-[15px]'>
							<Link to='/counseling'>Counseling</Link>
						</li>
					</ul>
				</div>
				<div className='footer_column'>
					<h4 className='text-[1rem] font-bold leading-[28px] mb-[15px]'>
						Information
					</h4>
					<ul>
						<li className='text-[0.88rem] font-medium leading-[17.07px] mb-[15px]'>
							<Link to='/faq'>FAQ</Link>
						</li>
						<li className='text-[0.88rem] font-medium leading-[17.07px] mb-[15px]'>
							<Link to='/blog'>Blog</Link>
						</li>
						<li className='text-[0.88rem] font-medium leading-[17.07px] mb-[15px]'>
							<Link to='/support'>Support</Link>
						</li>
					</ul>
				</div>
				<div className='footer_column'>
					<h4 className='text-[1rem] font-bold leading-[28px] mb-[15px]'>
						Company
					</h4>
					<ul>
						<li className='text-[0.88rem] font-medium leading-[17.07px] mb-[15px]'>
							<Link to='/support-company'>Support</Link>
						</li>
						<li className='text-[0.88rem] font-medium leading-[17.07px] mb-[15px]'>
							<Link to='/careers'>Careers</Link>
						</li>
						<li className='text-[0.88rem] font-medium leading-[17.07px] mb-[15px]'>
							<Link to='/contact-us'>Contact us</Link>
						</li>
					</ul>
				</div>
			</div>
			<Subscribe />
		</div>
	);
};

export default TopFooter;
