import React from "react";
import GradientShape from "../GradientShape";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const {
    t,
    i18n: { language: lang },
  } = useTranslation("home");
  return (
    <section className="hero_sec pt-[75px] lg:w-[600px] max-xl:w-full relative text-white">
      <GradientShape
        circleStyle={
          "top-30 left-[110%] w-[250px] h-[250px] opacity-[0.4] blur-[5px] mix-blend-color-dodge"
        }
        gradients={"bg-gradient-radial from-yellow-secondary 0% to-black 100%"}
      />
      <div data-aos="zoom-in">
        <span
          className={`${
            lang === "ar" ? "tracking-[1px] text-[17px]" : "tracking-[6px]"
          } font-normal text-[0.88rem]`}
        >
          {t("header_title")}
        </span>
        <h1 className="text-[2.81rem] sm:text-[5rem] mb-4 xs:mb-0 font-bold xs:leading-[97.52px]">
          {t("studio_heading")}
        </h1>
        <p className="info font-normal font-poppins text-[2rem] sm:text-[2.5rem]">
          {t("header_description")}
          <span className="special">{t("text_special")}</span>
        </p>
        <Link
          to="*"
          className="bg-blue-brand py-3 px-4 uppercase rounded text-[0.88rem] font-bold inline-block leading-[17.07px] mt-[36px] shadow-light-ouset"
        >
          {t("start_journey_button")}
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
