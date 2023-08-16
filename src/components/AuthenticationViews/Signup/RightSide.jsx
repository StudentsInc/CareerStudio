import Logo from "../../Logo";
import { Link } from "react-router-dom";
import "../../../pages/pagesStyle.css";
import { logo } from "../../../assets/images";
import Form from "./Form";
const RightSide = () => {
  const handleOnSubmit = (userInfo) => {
    console.log("click");
    console.log(userInfo);
  };
  return (
    <div className="w-1/2 py-24 flex-1 relative">
      <div className="w-fit pr-5 pl-5 relative left-1/2 -translate-x-1/2 block mb-20 md:hidden">
        <Logo
          txt1={"Students"}
          txt2={"Inc."}
          txtStyle={"font-bold text-[1.875rem]"}
          imgStyle={"h-[44px]"}
          imgUrl={logo}
          logoStyle={"md:hidden flex items-center gap-[12.8px]"}
        />
        {/* 1.875rem === 30px === 3xl*/}
      </div>
      <div className="container">
        <div className="form-content w-full lg:w-[80%] 2xl:w-[75%] mx-auto">
          <h4 className="text-[#BDBDBD]">Welcome</h4>
          <h1 className="text-[#F2F2F2] text-[1.875rem] font-bold">Sign up</h1>

          <Form submitForm={handleOnSubmit} />

          <h2 className="text-[#F2F2F2] mt-10 text-center">
            Already have an account?{" "}
            <Link to={"/login"}>
              <span className="text-blue-text ml-2">Login</span>
            </Link>
            {/* Demo link to reset page */}
            <br />
            <Link to={"/resetPassword"}>
              <span className="text-blue-text ml-2">Demo: Reset Password</span>
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
};
export default RightSide;
