import LeftSide from "../components/AuthenticationViews/LeftSide";
import ResetForm from "../components/AuthenticationViews/Reset/ResetForm";
import Logo from "../components/Logo";
import { logo } from "../assets/images";
const Reset = () => {
	const handleOnSubmit = (userPassword) => {
		console.log("click");
		console.log(userPassword);
	};
	document.title = "Reset";
	return (
		<div className='flex min-h-screen'>
			<LeftSide />

			<div className='w-1/2 flex-1 relative'>
				<div className='w-fit pr-5 pl-5 relative left-1/2 -translate-x-1/2 block mb-20 md:hidden pt-20'>
					<Logo
						txt1={"Students"}
						txt2={"Inc."}
						ftSize={1.875}
						txtStyle={"logoTitle font-bold text-[1.875rem]"}
						imgStyle={"h-[44px] md:w-[65px] md:h-[65px]"}
						logoStyle={"md:hidden flex items-center gap-[12.8px]"}
						imgUrl={logo}
					/>
				</div>
				<div className='container md:py-40 lg:w-[70%] w-[85%] m-auto'>
					<h4 className='text-[#BDBDBD]'>Confirmed</h4>
					<h1 className='text-[#F2F2F2] text-[27px] md:text-[1.875rem] font-bold'>
						Reset Password
					</h1>
					<h4 className='text-[#BDBDBD]'>Write here your new password</h4>

					<ResetForm submitForm={handleOnSubmit} />
				</div>
			</div>
		</div>
	);
};
export default Reset;
