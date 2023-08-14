import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<div className='notFound min-h-screen flex items-center justify-center -my-[90px] overflow-hidden'>
			<div className='flex items-center justify-center flex-col'>
				<div className='notfound-404 relative xs:w-[700px] h-[290px] uppercase mx-auto text-center flex items-center justify-center'>
					<h1 className=' w-full -z-10 max-[280px]:text-[125px] text-[140px] md:text-[225px] text-[#030005] font-black -tracking-[20px] '>
						404
					</h1>
					<span className='w-full text-white font-bold max-[280px]:text-[14px] xs:text-[25px] md:text-[42px] tracking-[13px] ms-3 absolute bottom-[70px] left-1/2 -translate-x-1/2'>
						Page not found
					</span>
				</div>
				<Link
					className='block ease-in-out duration-300 border border-2 border-yellow-main text-yellow-main hover:border-blue-brand  hover:text-blue-brand px-10 py-2 z-10'
					to='/'>
					HomePage
				</Link>
			</div>
		</div>
	);
};

export default NotFound;
