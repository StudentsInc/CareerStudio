import React from "react";
import GoldStar from "./GoldStart";
import {
  person1,
  person2,
  person3,
  person4,
  person5,
  person6,
  person7,
} from "../../assets/images";

import { useTranslation } from "react-i18next";
const StoriesSection = ({ GradientShape }) => {
  const { t } = useTranslation("home");
  return (
    <section className="stories mt-[101px] relative data-aos='fade-up' ">
      <h2 className="text-[2.56rem] sm:text-[3.8rem] font-bold uppercase">
        {t("stories_head")}
      </h2>
      <p className="font-normal text-[1rem] sm:w-[422px] leading-[19.5px] ms-[4rem]">
        {t("stories_description")}
      </p>
      <div className="stories_info mt-[53px] flex  md:flex-col-reverse lg:flex-row items-center justify-between">
        <div data-aos="fade-right" className="info">
          <div className="stars mb-[15px] flex items-center gap-[6.6px]">
            <GoldStar />
            <GoldStar />
            <GoldStar />
            <GoldStar />
            <GoldStar />
          </div>
          <p className="w-full text-[1.16rem] sm:w-[567px] font-normal leading-[25.96px]">
            {t("quote")}
          </p>
          <div className="story_name mt-[31px]">
            <h3 className="work_name mb-[10px] italic  font-bold text-[1.25rem] leading-[24.38px]">
              {t("author")}
            </h3>
            <span className="person_name text-[1rem] leading-[19.5px] font-normal">
              {t("occupation")}
            </span>
          </div>
        </div>
        <div
          data-aos="fade-left"
          className="gallery hidden md:grid grid grid-cols-3 grid-rows-auto h-full mx-auto transition duration-500 gap-x-[20px]"
        >
          <div className="HolderImage self-center grid gap-y-[20px]">
            <figure className="gallery-item1 w-[126px] h-[126px]">
              <img
                className="w-full h-full object-cover"
                src={person4}
                alt="photo"
              />
            </figure>
            <figure className="gallery-item2 w-[126px] h-[126px]">
              <img
                className="w-full h-full object-cover"
                src={person7}
                alt="photo"
              />
            </figure>
          </div>
          <div className="HolderImage self-center grid gap-y-[20px] relative">
            <figure className="gallery-item1 w-[126px] h-[126px]">
              <img
                className="w-full h-full object-cover"
                src={person2}
                alt="photo"
              />
            </figure>
            <figure className="gallery-item4 w-[126px] h-[126px]">
              <img
                className="w-full h-full object-cover"
                src={person5}
                alt="photo"
              />
            </figure>
            <figure className="gallery-item5 w-[175px] h-[175px] scale-125 xl:scale-150 absolute bottom-10 left-[-25px]">
              <img
                className="w-full h-full object-cover "
                src={person1}
                alt="photo"
              />
            </figure>
            <figure className="gallery-item6 h-[175px]"></figure>
          </div>
          <div className="HolderImage self-center grid gap-y-[20px]">
            <figure className="gallery-item1 w-[126px] h-[126px]">
              <img
                className="w-full h-full object-cover"
                src={person3}
                alt="photo"
              />
            </figure>
            <figure className="gallery-item2 w-[126px] h-[126px]">
              <img
                className="w-full h-full object-cover"
                src={person6}
                alt="photo"
              />
            </figure>
          </div>
        </div>
      </div>
      <GradientShape
        circleStyle={
          "right-[250px] top-[0px] w-[450px] h-[461px] opacity-[0.7] blur-[147px]"
        }
      />
    </section>
  );
};

export default StoriesSection;
