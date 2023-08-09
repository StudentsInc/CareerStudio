import React from "react";
import { Outlet } from "react-router";
import LeftSide from "../pages/LeftSide";
export const AuthenticationViewsLayout = () => {
  return (
    <div className="flex">
      <LeftSide /> {/* Render the LeftSide component */}
      <div className="flex-1 md:mr-72">
        {" "}
        {/* Adjust the spacing with margin left */}
        <Outlet />
      </div>
    </div>
  );
};
