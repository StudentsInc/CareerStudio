import React from "react";
import Langs from "./Langs";
import { NavLink } from "react-router-dom";
import { useClickOutside } from "../../utils/helpers";
const DropDownMenu = ({ setIsOpen }) => {
	const menuRef = useClickOutside(() => setIsOpen(false));
	return (
		<div
			ref={menuRef}
			className='mt-6 py-2 absolute z-10 px-[12px]  py-[24px] text-[14px] bg-purple-main w-[133px] flex flex-col gap-y-[18px] items-center rounded-lg shadow-lg'>
			<NavLink
				to='/career-library'
				className={({ isActive }) =>
					isActive
						? "text-white"
						: "block hover:bg-gray-900/20 px-1 rounded-md text-white text-opacity-50"
				}>
				Career Library
			</NavLink>
			<NavLink
				to='/major-library'
				className={({ isActive }) =>
					isActive
						? "text-white"
						: "block hover:bg-gray-900/20 px-1 rounded-md text-white text-opacity-50"
				}>
				Major Library
			</NavLink>
			<NavLink
				to='/school-library'
				className={({ isActive }) =>
					isActive
						? "text-white"
						: "block hover:bg-gray-900/20 px-1 rounded-md text-white text-opacity-50"
				}>
				School Library
			</NavLink>
			<Langs />
		</div>
	);
};

export default DropDownMenu;
