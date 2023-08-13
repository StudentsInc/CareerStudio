import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AuthenticationViews from "./pages/AuthenticationViews";
import Forgot from "./pages/Forgot";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthenticationViewsLayout } from "./layout/AuthenticationViewsLayout";
import Reset from "./pages/reset";
import SignIn from "./pages/SignUp";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route element={<AuthenticationViewsLayout />}>
          <Route path="/" element={<SignIn />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
