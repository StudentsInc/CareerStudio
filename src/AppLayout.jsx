import BtnToTop from "./components/BtnToTop";
import Navbar from "./components/Navbar";
import { useLocation } from "react-router-dom";

const AppLayout = ({ children }) => {
  const location = useLocation();
  const excludeNavbarPaths = [
    "/login",
    "/signUp",
    "/resetPassword",
    "/forgotPassword",
  ]; // Specify paths where Navbar should be excluded
  const shouldShowNavbar = !excludeNavbarPaths.includes(location.pathname);

<<<<<<< HEAD
	return (
		<div className='relative overflow-hidden'>
			<BtnToTop />
			{shouldShowNavbar && <Navbar />}
			{children}
		</div>
	);
||||||| a5fc949
	return (
		<div className='relative '>
			<BtnToTop />
			{shouldShowNavbar && <Navbar />}
			{children}
		</div>
	);
=======
  return (
    <div className="relative ">
      <BtnToTop />
      {shouldShowNavbar && <Navbar />}
      {children}
    </div>
  );
>>>>>>> red/feature/authentication-views
};

export default AppLayout;
