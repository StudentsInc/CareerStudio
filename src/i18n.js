import Backend from 'i18next-http-backend';
import i18n from "i18next";
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
	.use(Backend)
	.use(LanguageDetector)
	.use(initReactI18next)

	.init({
		backend: {
			loadPath: '/locales/{{lng}}/{{ns}}.json',
		},
		ns: ['home'],
		defaultNS: 'home',
		lng: "en",
		fallbackLng: "en",
		detection: {
			order: ["localStorage", "navigator"],
			caches: ["localStorage"]
		},
		interpolation: {
			escapeValue: false,
		},
	});
