import Logo from "../Logo";
import { logo } from "../../assets/images";
import "../../pages/pagesStyle.css";
const LeftSide = () => {
  const urlInfo = location.href.split("/");
  return (
    <div
      className={`bg-blue-brand relative hidden md:block leftImages shrink-0 w-[47%] z-10 ${
        urlInfo[urlInfo.length - 1] === "resetPassword"
          ? "reset_left_images"
          : ""
      } ${
        urlInfo[urlInfo.length - 1] === "forgotPassword"
          ? "reset_left_images"
          : ""
      }`}
    >
      <div className="w-[350px] pr-5 pl-5 absolute bottom-1/2 right-1/2 translate-y-1/2 translate-x-1/2 block">
        <Logo
          txt1={"Students"}
          txt2={"Inc."}
          txtStyle={"font-bold text-[1.875rem]"}
          imgStyle={"h-[44px] w-[44px] md:h-[60px] md:w-[60px]"}
          imgUrl={logo}
        />
        {/* 1.875rem === 30px === 3xl*/}
      </div>
    </div>
  );
};
export default LeftSide;
