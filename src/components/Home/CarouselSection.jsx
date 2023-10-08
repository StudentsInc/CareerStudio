import React from "react";
import Carousel_Sec from "./Carousel_Sec";
import { useTranslation } from "react-i18next";

const CarouselSection = ({ GradientShape }) => {
  const {
    t,
    i18n: { language: lang },
  } = useTranslation("home");
  return (
    <section className="carousel_sec pt-[277px] pb-[4rem] xs:pb-[235px] relative">
      <div className="hidden md:block">
        <GradientShape
          circleStyle={
            "top-0 right-[15%] w-[300px] h-[300px] opacity-[0.4] blur-[30px] mix-blend-color-dodge"
          }
          gradients={"bg-gradient-radial from-blue-brand 0% to-black 100%"}
        />
      </div>
      <div
        className={`Head flex ${
          lang === "ar" ? "items-start" : "items-end"
        } flex-col mb-[52px]`}
      >
        <h2 className="uppercase font-bold text-[2.56rem] sm:text-[3.8rem] sm:w-[611px] pb-[30px]">
          {t("about_head")}
        </h2>
        <p className="font-normal font-poppins opacity-40 text-[1rem] sm:w-[546px]">
          {t("about_description")}
        </p>
      </div>
      <Carousel_Sec />
      <GradientShape
        circleStyle={
          "-left-[250px] bottom-0 w-[405.3px] h-[425.1px] opacity-[0.4] blur-[131px]"
        }
      />
      <GradientShape
        circleStyle={
          "-right-[158px] bottom-0 top-[450px] w-[310px] h-[316.5px] opacity-[0.5] blur-[147px]"
        }
      />
    </section>
  );
};

export default CarouselSection;
