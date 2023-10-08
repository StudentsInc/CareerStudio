import React from "react";
import JouneyInfo from "./JouneyInfo";
import { useTranslation } from "react-i18next";
const JourneySection = ({ GradientShape }) => {
  const { t } = useTranslation("home");
  const contents = t("journey_items", { returnObjects: true });

  return (
    <section
      data-aos="fade-up"
      data-aos-delay="50"
      className="journey relative"
    >
      <h2 className="font-bold text-[2.56rem] sm:text-[3.43rem] md:w-[893px] mb-[15px] uppercase">
        <span className="text-blue-secondary">{t("journey_head.head")}</span>{" "}
        {t("journey_head.children.first")},
        <span className="text-blue-secondary"> {t("journey_head.head")}</span>{" "}
        {t("journey_head.children.last")},
      </h2>
      <div>
        <p className="font-normal ms-auto text-[1.25rem] sm:w-[546px]">
          {t("journey_description")}
        </p>
        <div className="journey_info pt-20 flex-col lg:flex-row gap-[6rem] flex items-center justify-between mt-[48px]">
          {contents &&
            contents.map((info) => (
              <JouneyInfo
                key={t(info.id)}
                id={t(info.id)}
                img={t(info.img)}
                number={t(info.number)}
                head={t(info.head)}
                info={t(info.info)}
                txtBtn={t(info.txt_btn)}
              />
            ))}
        </div>
      </div>
      <GradientShape
        circleStyle={
          "-right-[150px] -top-[25px] w-[516px] h-[528px] opacity-[0.5] blur-[147px]"
        }
      />
    </section>
  );
};

export default JourneySection;
