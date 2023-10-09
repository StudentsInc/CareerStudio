import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const Logo = ({ txt1, txt2, imgUrl, imgStyle, txtStyle, logoStyle }) => {
  const {
    i18n: { language: lang },
  } = useTranslation();
  console.log(lang);
  return (
    <Link
      className={`${logoStyle} ${
        lang === "ar" ? "flex-row-reverse" : "flex-row"
      }`}
      to={`/${lang}`}
    >
      <img className={imgStyle} src={imgUrl} alt="logo" />
      <span className={`logoTitle font-bold ${txtStyle}`}>
        {txt1} <span className={`text-thin font-thin`}>{txt2}</span>
      </span>
    </Link>
  );
};

export default Logo;
