import React from "react";
import LeftSide from "../components/AuthenticationViews/LeftSide";
import RightSide from "../components/AuthenticationViews/login/RightSide";
import "./pagesStyle.css";
const Login = () => {
	return (
		<div className='flex min-h-screen'>
			<LeftSide />
			<RightSide />
		</div>
	);
};

export default Login;
