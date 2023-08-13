import React from "react";
import { Outlet } from "react-router";
import LeftSide from "../pages/LeftSide";
export const AuthenticationViewsLayout = () => {
  return (
    <div className="flex">
      <LeftSide /> {/* Render the LeftSide component */}
      <div className="flex-1 xl:mr-72 md:mr-32">
        {" "}
        {/* Adjust the spacing with margin left */}
        <Outlet />
      </div>
    </div>
  );
};
