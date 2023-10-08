import Aos from "aos";
import i18next from "i18next";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function LanguageSelector({ isOpen }) {
  const navigate = useNavigate();
  const [activeLang, setActiveLang] = useState("en");
  // localStorage.getItem("i18nextLng") || "en"
  const isRTL = activeLang === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    setActiveLang(localStorage.getItem("i18nextLng"));
    !isOpen && document.documentElement.setAttribute("dir", isRTL);
  });

  const changeLanguage = (lang) => {
    setActiveLang(lang);
    localStorage.setItem("i18nextLng", lang);
    i18next.changeLanguage(lang);
    setTimeout(() => {
      Aos.refresh();
    }, 100);
    document.documentElement.setAttribute("dir", isRTL);
    const currentPath = location.pathname.split("/").slice(2).join("/");
    navigate(`/${lang}/${currentPath}`);
  };

  return (
    <div className="langs flex items-center font-inter">
      <button
        className={`ps-0 px-4 text-[0.83rem] ${
          activeLang === "en"
            ? "font-bold text-white md:text-blue-text"
            : "text-white text-opacity-50 md:text-white md:text-opacity-100"
        }`}
        onClick={() => changeLanguage("en")}
      >
        EN
      </button>
      <span className="w-0.5 h-5 bg-white md:bg-gray-500 flex"></span>
      <button
        className={`ps-4 text-[0.83rem] ${
          activeLang === "ar"
            ? "font-bold text-white md:text-blue-text"
            : "text-white text-opacity-50 md:text-white md:text-opacity-100"
        }`}
        onClick={() => changeLanguage("ar")}
      >
        AR
      </button>
    </div>
  );
}

export default LanguageSelector;
