import i18next from "i18next";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FiArrowRight } from "react-icons/fi";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const { t } = useTranslation("nav&footer");
  const isRTL = i18next.dir() === "rtl";
  const handleSubmit = (e) => {
    e.preventDefault();
    //logic here
    console.log("Email:", email);
    // Reset the email field after submission
    setEmail("");
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <form
      className="flex flex-col w-100 lg:w-[338px] h-auto xs:h-[220px] bg-white/10 p-10"
      onSubmit={handleSubmit}
    >
      <label
        className="font-bold leading-[28px] mb-[16px]"
        htmlFor="emailInput"
      >
        {t("footer.subscribe.title")}
      </label>
      <div className="flex">
        <input
          className={`w-[80%] text-[0.8rem] text-black xs:text-[1rem] bg-white h-[50px] ${
            isRTL
              ? "rounded-tr-[6px] rounded-br-[6px]"
              : "rounded-tl-[6px] rounded-bl-[6px]"
          } border-[2px] ps-[16px] mb-[20px] flex focus:outline-none`}
          type="email"
          id="emailInput"
          placeholder={t("footer.subscribe.placeholder")}
          value={email}
          onChange={handleChange}
        />
        <button
          className={`h-[50px] w-[50px] rounded-tr-[6px] rounded-br-[6px] bg-blue-brand flex items-center justify-center text-[1.6rem] ${
            isRTL ? "rotate-180" : "0"
          }`}
          type="submit"
          aria-label="Submit Form"
        >
          <FiArrowRight />
        </button>
      </div>
      <p className="text-[0.75rem] font-normal text-white/60 leading-[20.4px]">
        {t("footer.subscribe.description")}
      </p>
    </form>
  );
};

export default Subscribe;
