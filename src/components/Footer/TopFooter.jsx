import React from "react";
import { Link } from "react-router-dom";
import Subscribe from "./Subscribe";
import { useTranslation } from "react-i18next"; // Import the useTranslation hook

const TopFooter = () => {
  const { t } = useTranslation("nav&footer"); // Use the default namespace

  return (
    <div className="top_footer flex flex-col-reverse lg:flex-row justify-between items-center lg:gap-[100px] lg:gap-[135px] xl:pb-[63px]">
      <div className="links w-full flex flex-col xs:flex-row lg:gap-6 xl:gap-0 justify-between flex-1 mt-20">
        <div className="footer_column">
          <h4 className="text-[1rem] font-bold leading-[28px] mb-[15px]">
            {t("footer.product.title")}
          </h4>
          <ul>
            {t("footer.product.links", { returnObjects: true }).map(
              (link, index) => (
                <li
                  key={index}
                  className="text-[0.88rem] font-medium leading-[17.07px] mb-[15px]"
                >
                  <Link to={link.to}>{t(link.text)}</Link>
                </li>
              )
            )}
          </ul>
        </div>
        <div className="footer_column">
          <h4 className="text-[1rem] font-bold leading-[28px] mb-[15px]">
            {t("footer.information.title")}
          </h4>
          <ul>
            {t("footer.information.links", { returnObjects: true }).map(
              (link, index) => (
                <li
                  key={index}
                  className="text-[0.88rem] font-medium leading-[17.07px] mb-[15px]"
                >
                  <Link to={link.to}>{t(link.text)}</Link>
                </li>
              )
            )}
          </ul>
        </div>
        <div className="footer_column">
          <h4 className="text-[1rem] font-bold leading-[28px] mb-[15px]">
            {t("footer.company.title")}
          </h4>
          <ul>
            {t("footer.company.links", { returnObjects: true }).map(
              (link, index) => (
                <li
                  key={index}
                  className="text-[0.88rem] font-medium leading-[17.07px] mb-[15px]"
                >
                  <Link to={link.to}>{t(link.text)}</Link>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
      <Subscribe />
    </div>
  );
};

export default TopFooter;
