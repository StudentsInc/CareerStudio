import React from "react";
import JoinInfo from "./JoinInfo";
import { wavyShape, wavyShape3XL, wavyShapeWeb } from "../../assets/images";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const JoinInfoSection = ({ GradientShape }) => {
  const { t } = useTranslation("home");
  const contents = t("join_items", { returnObjects: true });
  const isRTL = i18next.dir() === "rtl";
  return (
    <section
      dir="ltr"
      data-aos="fade-up"
      className="join_info relative mt-[119px] flex flex-col"
    >
      <h2
        className={`flex justify-end font-bold text-[2.56rem] ${
          isRTL ? "text-end" : "text-start"
        } sm:text-[3.13rem] uppercase mb-[63px]`}
      >
        {t("join_head.first")} <br /> {t("join_head.last")}
      </h2>
      {contents &&
        contents.map((info) => (
          <JoinInfo
            key={t(info.id)}
            id={t(info.id)}
            img={t(info.img)}
            head={t(info.head)}
            info={t(info.info)}
          />
        ))}
      <div className="moreJoin_info py-[150px] relative md:my-[164px] sm:ms-[100px]">
        <p
          data-aos="fade-right"
          className="w-full sm:w-[474px] shrink-0 text-[1.13rem] sm:text-[1.7rem] font-medium"
        >
          {t("join_more_info")}
        </p>
        <div
          data-aos="fade-left"
          className="img_container absolute bottom-1 sm:bottom-0 md:-bottom-[6rem] -z-10 -right-[11rem] xl:-right-[6rem]"
        >
          <picture width="772px">
            <source
              type="image/webp"
              media="(min-width: 767px)"
              srcSet={wavyShapeWeb}
            ></source>
            <source
              type="image/png"
              media="(max-width: 768px)"
              srcSet={wavyShape3XL}
            ></source>
            <img
              className="rounded-[23px] opacity-60 md:opacity-100 scale-[1.7] md:scale-100"
              src={wavyShape}
              width="100%"
              height="100%"
              alt="Colorful wavy image representing XYZ"
            />
          </picture>
        </div>
      </div>
      <GradientShape
        circleStyle={
          " left-[350px] top-[60px] w-[394px] h-[403px] opacity-[0.7] blur-[122px] "
        }
      />
      <GradientShape
        circleStyle={
          "-left-[158px] bottom-[800px] w-[317px] h-[325px] opacity-[0.7] blur-[98px] "
        }
      />
      <GradientShape
        circleStyle={
          "left-[300px] bottom-[150px] w-[450px] h-[461px] opacity-[0.7] blur-[147px] "
        }
      />
    </section>
  );
};

export default JoinInfoSection;
