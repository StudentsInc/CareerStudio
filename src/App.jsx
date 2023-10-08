import { lazy, Suspense, useEffect } from "react";
import "./App.css";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import AppLayout from "./AppLayout";
import Loader from "./components/Loader";
import { useTranslation } from "react-i18next";
import LanguagePath from "./components/LanguagePath";
const LazyAOS = lazy(() => import("./components/LazyAos"));
const Home = lazy(() => import("./pages/Home"));
const Signup = lazy(() => import("./pages/Signup"));
const Login = lazy(() => import("./pages/Login"));
const ForgotPass = lazy(() => import("./pages/ForgotPass"));
const ResetPass = lazy(() => import("./pages/ResetPass"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  const { i18n } = useTranslation();
  const location = useLocation();
  const lang = location.pathname.split("/")[1];

  useEffect(() => {
    i18n.changeLanguage(lang);
    const currentLanguage = i18n.dir();
    if (currentLanguage === "rtl") {
      document.body.classList.remove("font-montserrat");
      document.body.classList.add("font-cairo");
    } else {
      document.body.classList.remove("font-cairo");
      document.body.classList.add("font-montserrat");
    }
  }, [i18n.language, lang]);

  return (
    <AppLayout>
      <Suspense fallback={<Loader />}>
        <LazyAOS />
        <Routes>
          <Route path="/" element={<Navigate to="/en" />} />
          <Route path=":lang/" element={<Home />} />
          <Route path=":lang/signUp" element={<Signup />} />
          <Route path=":lang/login" element={<Login />} />
          <Route path=":lang/forgotPassword" element={<ForgotPass />} />
          <Route path=":lang/resetPassword" element={<ResetPass />} />
          <Route path=":lang/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </AppLayout>
  );
}

export default App;
