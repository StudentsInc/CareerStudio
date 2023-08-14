import { useState } from "react";
import DropDownMenu from "./DropDownMenu";

const BurgerMenu = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = (e) => {
		e.preventDefault();
		setIsOpen((prev) => !prev);
	};

	return (
		<div className='md:hidden'>
			<button
				onClick={toggleMenu}
				className='flex flex-col h-5 justify-between text-gray-800 focus:outline-none focus:text-gray-900 group  duration-300'>
				<span
					className={`w-6 h-[3px] rounded-lg ${
						isOpen ? "rotate-45 translate-x-0  translate-y-2 duration-300" : ""
					} bg-white`}></span>
				{!isOpen && (
					<span
						className={`w-3 h-[3px] rounded-lg duration-300 ${
							isOpen ? "opacity-0" : "group-hover:w-6"
						} bg-white`}></span>
				)}
				<span
					className={`w-6 h-[3px] rounded-lg ${
						isOpen
							? "-rotate-45 -translate-x-0 -translate-y-2 duration-300"
							: ""
					} bg-white `}></span>
			</button>

			{/* Dropdown Menu */}
			{isOpen && <DropDownMenu setIsOpen={setIsOpen} />}
		</div>
	);
};

export default BurgerMenu;
