import i18next from "i18next";
import { useTranslation } from "react-i18next";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const BottomFooter = () => {
  const { t } = useTranslation("nav&footer");
  const isRtl = i18next.dir() === "rtl";
  return (
    <div className="bottom_footer">
      <div className="border-b-2 hidden md:block opacity-[20%]"></div>
      <div className="flex gap-y-8 flex-col-reverse md:flex-row md:justify-center lg:justify-end pt-[37px] pb-[22px]  relative">
        <div
          className={`terms&privacy  flex justify-center ${
            isRtl ? "md:ml-[50px] lg:ml-[197px]" : "md:mr-[50px] lg:mr-[197px]"
          } items-center gap-[26px]`}
        >
          <Link className="font-medium text-[0.88rem]" to="/terms">
            {t("footer.bottomFooter.termsPrivacyLinks.terms")}
          </Link>
          <Link className="font-medium text-[0.88rem]" to="/privacy">
            {t("footer.bottomFooter.termsPrivacyLinks.privacy")}
          </Link>
          <Link className="font-medium text-[0.88rem]" to="/cookies">
            {t("footer.bottomFooter.termsPrivacyLinks.cookies")}
          </Link>
        </div>
        <div className="border-t-2 block opacity-[20%]"></div>
        <div className="social-links flex items-center gap-[15px] justify-center md:self-end">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit us on Twitter"
          >
            <FaTwitter className="icon border-2 rounded-full p-2 xs:p-3 text-[2.2rem] xs:text-[2.63rem]" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit us on Facebook"
          >
            <FaFacebook className="icon border-2 rounded-full p-2 xs:p-3 text-[2.2rem] xs:text-[2.63rem]" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit us on Instagram"
          >
            <FaInstagram className="icon border-2 rounded-full p-2 xs:p-3 text-[2.2rem] xs:text-[2.63rem]" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit us on YouTube"
          >
            <FaYoutube className="icon border-2 rounded-full p-2 xs:p-3 text-[2.2rem] xs:text-[2.63rem]" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit us on LinkedIn"
          >
            <FaLinkedin className="icon border-2 rounded-full p-2 xs:p-3 text-[2.2rem] xs:text-[2.63rem]" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BottomFooter;
