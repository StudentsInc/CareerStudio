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

  return (
    <div className="relative ">
      <BtnToTop />
      {shouldShowNavbar && <Navbar />}
      {children}
    </div>
  );
};

export default AppLayout;
