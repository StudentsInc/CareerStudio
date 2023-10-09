import { Link } from "react-router-dom";
import Langs from "./Langs";
import Logo from "../Logo";
import BurgerMenu from "./BurgerMenu";
import logo from "../../assets/images/logo.svg";
import { useTranslation } from "react-i18next";
const Navbar = () => {
  const {
    t,
    i18n: { language: lang },
  } = useTranslation("nav&footer");
  return (
    <div className="navbar relative ">
      <div className="container">
        <div className="navContent flex justify-between items-center min-h-[70px] py-8">
          <Logo
            txt1="Career"
            txt2="Studio"
            imgStyle={"w-[35px] h-[35px]"}
            txtStyle={"text-[18px]"}
            imgUrl={logo}
            logoStyle={"logo hidden md:flex items-center gap-2"}
          />
          <BurgerMenu />
          <div className="Links flex justify-between items-center gap-[28px]">
            <div className="hidden md:block">
              <Langs />
            </div>
            <div className="Auth_Btns flex items-center gap-[13px]">
              <Link
                className="auth signup text-center w-[90px] xs:min-w-[118px] w-fit bg-white text-blue-brand px-3 xs:px-6 py-3 rounded-md uppercase font-semibold text-sm"
                to={`${lang}/signUp`}
              >
                {t("buttons.signUp")}
              </Link>
              <Link
                className="auth login text-center w-[90px] xs:min-w-[118px] w-fit  bg-blue-brand text-whit px-3 xs:px-6 py-3 rounded-md uppercase font-semibold text-sm shadow-light-ouset"
                to={`${lang}/login`}
              >
                {t("buttons.logIn")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
