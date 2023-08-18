import React from "react";
import Button from "../components/Button";
import Card from "../components/Dashboard/Card";
import Personality from "../components/Dashboard/Personality";
import dashboardData from "../assets/dashboardData";
import Interests from "../components/Dashboard/Interests";
import LearningStyle from "../components/Dashboard/LearningStyle";
import "./pagesStyle.css";
const dashboard = () => {
	const { personality } = dashboardData;
	personality;
	return (
		<main className='page_content dashboard min-h-screen relative mt-[1rem] pb-[82px]'>
			<div className='container'>
				<div className='card_container flex items-center flex-wrap lg:flex-nowrap gap-[15px] justify-center md:justify-between'>
					<Card
						title='Your Personality'
						cardContent={personality.map((info) => (
							<Personality
								key={info.title}
								title={info.title}
								subTitle1={info.subTitle1}
								subTitle2={info.subTitle2}
								progress={info.progress}
							/>
						))}
						btnTxt='Read your Report'
						btnStyle='bg-blue-brand '
					/>
					<Card
						title='your Interests'
						cardContent={<Interests />}
						btnTxt='Read your Report'
						btnStyle='bg-blue-brand '
					/>
					<Card
						title='your Learning Style'
						cardContent={<LearningStyle />}
						btnTxt='Coming Soon'
						btnStyle='bg-gray-disabled'
					/>
				</div>
				<Button
					text={"Career Matches"}
					className={
						"flex justify-center bg-blue-brand shadow-dark-inset m-auto w-[90%] sm:w-[365.1px] h-[53px] rounded-lg px-[42.1px] py-[15.8px] font-bold mt-[39px]"
					}
				/>
			</div>
		</main>
	);
};

export default dashboard;
