import React from "react";
import Langs from "./Langs";
import { NavLink } from "react-router-dom";
import { useClickOutside } from "../../utils/helpers";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const DropDownMenu = ({ isOpen, setIsOpen }) => {
  const menuRef = useClickOutside(() => setIsOpen(false));
  const {
    t,
    i18n: { language: lang },
  } = useTranslation("nav&footer");
  const contents = t("menuItems", { returnObjects: true });
  console.log(lang);

  return (
    <div
      ref={menuRef}
      className="mt-6 py-2 absolute z-10 px-[12px] py-[24px] text-[14px] bg-purple-main w-[133px] flex flex-col gap-y-[18px] items-center rounded-lg shadow-lg"
    >
      {contents.map((menuItem) => (
        <NavLink
          key={menuItem.id}
          to={menuItem.to.replace("[language]", lang)}
          className={({ isActive }) =>
            isActive
              ? "text-white"
              : "block hover-bg-gray-900/20 px-1 rounded-md text-white text-opacity-50"
          }
        >
          {menuItem.text}
        </NavLink>
      ))}
      <Langs isOpen={isOpen} />
    </div>
  );
};

export default React.memo(DropDownMenu);
