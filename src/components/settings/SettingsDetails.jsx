import React from "react";
import { useParams } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import NotFound from "../../pages/NotFound";

const SettingsDetails = () => {
	const { pageId } = useParams();
	let pageContent;
	switch (pageId) {
		case "profile_details":
			pageContent = <ProfileDetails />;
			break;
		case "email_notificaitons":
			pageContent = <EmailNotificaitons />;
			break;
		case "security":
			pageContent = <Security />;
			break;
		default:
			pageContent = <NotFound />;
			break;
	}
	return <div>{pageContent}</div>;
};

export default SettingsDetails;
