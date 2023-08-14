import { carousel1Png, carousel1Webp, carousel2Png, carousel2Webp, carousel3Png, carousel3Webp, ellipse1, ellipse2, ellipse3, ellipse4, ellipse5, ellipse6 } from "./images"
const homeData = {
	"carouselContents": [
		{
			"title": "Know Your Self",
			"description": "Love problem-solving but not big on socializing? You could be an engineer! More into storytelling than equations? Journalism might be your calling! Take our personality assessment now and get matched with careers that fit YOU, not the other way around.",
			"number": 1,
			"buttonText": "Start Here",
			"imagePng": carousel1Png,
			"imageWebp": carousel1Webp,
			"alt": "Illustration representing the idea of knowing oneself and finding suitable careers through personality assessment."
		},
		{
			"title": "EXPLORE YOUR OPTIONS",
			"description": "Now that we've unlocked the secrets of your personality, it's time to match you with careers that suit you best. But we're not talking about your run-of-the-mill career suggestions. We're talking about a carefully curated list of careers that align with your personality traits and interests.",
			"number": 2,
			"imagePng": carousel2Png,
			"imageWebp": carousel2Webp,
			"buttonText": "Start now",
			"image": "/src/assets/homePage/images/carousel-img2.png",
			"alt": "Illustration depicting the process of exploring career options based on personality traits and interests."
		},
		{
			"title": "Start your journey",
			"description": "Armed with knowledge and a clear direction, it's time to take the leap. We provide the tools and resources you need to chart your course. Whether it's finding the right college, scholarship, or internship, we are here to help you kickstart your journey. Don't just dream about your future—start building it",
			"number": 3,
			"buttonText": "click me already",
			"imagePng": carousel3Png,
			"imageWebp": carousel3Webp,
			"alt": "Illustration symbolizing the beginning of a journey with tools and resources to shape one's future."
		}
	],
	"journey_sec": [
		{
			"id": 1,
			"img": ellipse1,
			"number": 800,
			"head": "Careers",
			"info": "Ever wondered what an Ichthyologist does? Or a Philologist? We've got those and 798 more career profiles, just waiting for you to discover. Dive into our pool of opportunities and find your perfect fit. Be warned: choice overload is a real thing here!",
			"txtBtn": "Dive In Now"
		},
		{
			"id": 2,
			"img": ellipse2,
			"number": 300,
			"head": "Majors",
			"info": "From Anthropology to Zoology, and everything in between – we've got the ABCs of all the majors you could possibly dream of. Ready to untangle the spaghetti of choices and find your perfect major match? We're here to help!",
			"txtBtn": "Untangle Now"
		},
		{
			"id": 3,
			"img": ellipse3,
			"number": 31097,
			"head": "Collage",
			"info": "Big, small, urban, rural, party school, or academic powerhouse? With over 3100 colleges to choose from, we've got the lowdown on all of them. The only thing missing is your choice. Ready to embark on a virtual college tour",
			"txtBtn": "Start Touring"
		}
	],
	"join_sec": [
		{
			"id": 1,
			"img": ellipse4,
			"head": "By Students, For Students",
			"info": "We get you, because we are you! Student Inc. is created by students, for students. We know the struggles, the uncertainties, the late-night pizza-fueled study sessions. We've been there, done that, got the t-shirt"
		},
		{
			"id": 2,
			"img": ellipse5,
			"head": "Simplicity is our middle \n name",
			"info": "No jargon, no fluff, no 10-step processes. Just a simple, straightforward tool that gets you where you want to go"
		},
		{
			"id": 3,
			"img": ellipse6,
			"head": "Personalized for You",
			"info": "With our unique personality and interest assessment, you're not just getting generic advice. We match you with careers, majors, and colleges that fit YOU!"
		}
	],
}
export default homeData;