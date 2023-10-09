import React, { useState } from "react";
import { logo } from "../../../assets/images";
import { Link } from "react-router-dom";
import Form from "./Form";
import Logo from "../../Logo";
import { useTranslation } from "react-i18next";

const RightSide = () => {
  const [formValues, setFormValues] = useState({});
  const {
    i18n: { language: lang },
  } = useTranslation();
  console.log(lang);
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  console.log(formValues);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted successfully");
  };
  return (
    <div className="w-full h-full py-[2.9rem] py-none bg-transparent flex justify-center items-center flex-col">
      <div className="text-white md:hidden flex justify-center items-center  mb-20">
        <Logo
          txt1={"Career"}
          txt2={"Studio"}
          txtStyle={"font-bold text-[1.875rem]"}
          imgStyle={"h-[44px]"}
          imgUrl={logo}
          logoStyle={"md:hidden flex items-center gap-[12.8px]"}
        />
      </div>

      <div className="container">
        <div className="form-content w-[100%] lg:w-[80%] 2xl:w-[60%] mx-auto py-[25px] md:py-[119px]">
          <div className="mb-10">
            <p className="text-[#BDBDBD]">Welcome back</p>
            <h1 className="text-white font-bold text-[26px] xl:text-[2rem]">
              Login to your account
            </h1>
          </div>
          <Form handleChange={handleChange} handleSubmit={handleSubmit} />
          <div className="text-[#616161] text-center">
            Don't have an account?{" "}
            <Link to={`/${lang}/signUp`}>
              {" "}
              <span className="text-[#2B6CB0]">Join free today</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
