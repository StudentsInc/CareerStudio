import React from "react";
import Button from "../Button";

const Card = ({ title, cardContent, btnTxt, btnStyle }) => {
	const checkCard = title === "your Learning Style";
	return (
		<div
			className={`card w-[350px] lg:w-[420px] text-center ${
				checkCard ? "hidden lg:block" : "block"
			}`}>
			<h1 className='text-[25px] font-full font-semibold tracking-[0.42px] text-capitalize mb-[10px]'>
				{title}
			</h1>
			<div className='card_content w-full flex flex-col justify-between items-center h-[550px] w-[420px] mx-auto bg-blue-card shadow-dark-ouset backdrop-blur-[0.37px] rounded-3xl px-[30px] py-[28px]'>
				{cardContent}
				<Button
					text={btnTxt}
					className={`mt-[36px] w-[365.1px] w-full  rounded-lg px-[42.1px] py-[15.8px] font-bold shadow-light-inset ${btnStyle}`}
				/>
			</div>
		</div>
	);
};

export default Card;
