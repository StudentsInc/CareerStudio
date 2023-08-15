import { Link } from "react-router-dom";
import Langs from "./Langs";
import Logo from "../Logo";
import BurgerMenu from "./BurgerMenu";
import logo from "../../assets/images/logo.svg";
const Navbar = () => {
	return (
		<div className='navbar relative '>
			<div className='container'>
				<div className='navContent flex justify-between items-center min-h-[70px] py-8'>
					<Logo
						txt1='Career'
						txt2='Studio'
						imgStyle={"w-[35px] h-[35px]"}
						txtStyle={"text-[18px]"}
						imgUrl={logo}
					/>
					<BurgerMenu />
					<div className='Links flex justify-between items-center gap-[28px]'>
						<div className='hidden md:block'>
							<Langs />
						</div>
						<div className='Auth_Btns flex items-center gap-[13px]'>
							<Link
								className='auth signup text-center w-[90px] xs:w-[118px] bg-white text-blue-brand xs:px-6 py-3 rounded-md uppercase font-semibold text-sm'
								to='/signUp'>
								Sign UP
							</Link>
							<Link
								className='auth login text-center w-[90px] xs:w-[118px]  bg-blue-brand text-white xs:px-6 py-3 rounded-md uppercase font-semibold text-sm shadow-light-ouset'
								to='/login'>
								Log In
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
