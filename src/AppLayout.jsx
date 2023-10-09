import BtnToTop from "./components/BtnToTop";
import Navbar from "./components/Navbar";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const AppLayout = ({ children }) => {
  const {
    i18n: { language: lang },
  } = useTranslation();
  const location = useLocation();
  const excludeNavbarPaths = [
    `/${lang}/login`,
    `/${lang}/signUp`,
    `/${lang}/resetPassword`,
    `/${lang}/forgotPassword`,
  ]; // Specify paths where Navbar should be excluded
  const shouldShowNavbar = !excludeNavbarPaths.includes(location.pathname);

  return (
    <div className="relative overflow-hidden">
      <BtnToTop />
      {shouldShowNavbar && <Navbar />}
      {children}
    </div>
  );
};

export default AppLayout;
