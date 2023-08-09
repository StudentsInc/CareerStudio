import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AuthenticationViews from "./pages/AuthenticationViews";
import Forgot from "./pages/Forgot";
import LeftSide from "./pages/LeftSide";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthenticationViewsLayout } from "./layout/AuthenticationViewsLayout";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route element={<AuthenticationViewsLayout />}>
          <Route path="/" element={<AuthenticationViews />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
