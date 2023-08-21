import { logo } from "../assets/images";
import Logo from "../components/Logo";
import LeftSide from "../components/AuthenticationViews/LeftSide";
import ForgotForm from "../components/AuthenticationViews/login/ForgotForm";

const ForgotPass = () => {
	const handleSubmit = (e) => {
		e.preventDefault();

		console.log("Email sent successfully");
	};

	return (
		<div className='flex pb-[2rem] xs:pb-0'>
			<LeftSide />
			<div className='w-full h-screen bg-transparent flex max-[767px]:pt-[50px]  xs:justify-center items-center flex-col'>
				<div className='container'>
					<div className='form-content w-[100%] lg:w-[80%] 2xl:w-[60%] mx-auto'>
						<div className='text-white md:hidden flex justify-center items-center text-2xl mb-20'>
							<Logo
								txt1={"Career"}
								txt2={"Studio"}
								txtStyle={"font-bold text-[1.875rem]"}
								imgStyle={"h-[44px]"}
								imgUrl={logo}
								logoStyle={"md:hidden flex items-center gap-[12.8px]"}
							/>
						</div>
						<div className='mb-20 w-full'>
							<p className='text-[#BDBDBD]'>Oops</p>
							<h1 className='text-white font-bold text-[27px] md:text-3xl mb-3'>
								Forgot Password?
							</h1>
							<div className='text-[#828282]'>
								Enter the email address you used when you joined and we’ll send
								you instructions to reset your password
							</div>
						</div>
						<ForgotForm handleSubmit={handleSubmit} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ForgotPass;
