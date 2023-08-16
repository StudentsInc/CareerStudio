import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import ProfileDetails from "../components/settings/ProfileDetails";

const Settings = () => {
	return (
		<main className='page_content py-[4rem]'>
			<div className='container'>
				<h1 className='font-bold tracking-[1.6px] text-[2.5rem] mb-[54px]'>
					Settings
				</h1>
				<div className='hidden sm:block'>
					<ProfileDetails />
				</div>
				<div className='setting_links sm:hidden'>
					<Link
						className='flex items-center justify-between'
						to='/settings/profile_details'>
						Profile Details
						<span className='arrow'>
							<FiArrowRight />
						</span>
					</Link>
					<Link
						className='flex items-center justify-between'
						to='/settings/email_notifications'>
						Email Notifications
						<span className='arrow'>
							<FiArrowRight />
						</span>
					</Link>
					<Link
						className='flex items-center justify-between'
						to='/settings/security'>
						Security
						<span className='arrow'>
							<FiArrowRight />
						</span>
					</Link>
				</div>
			</div>
		</main>
	);
};

export default Settings;
