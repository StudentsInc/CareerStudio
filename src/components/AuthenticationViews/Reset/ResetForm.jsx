import { useState } from "react";
import "../../../pages/pagesStyle.css";
import Button from "../../Button";

const Form = (props) => {
	const [oldPassword, setOldPassword] = useState("");
	const [newPassword, setNewPassword] = useState("");
	const [isValid, setIsValid] = useState(null);

	const handleOldPassword = (e) => {
		e.preventDefault();
		setOldPassword(e.target.value);

		setIsValid(
			e.target.value.trim() === newPassword.trim() &&
				newPassword.trim().length >= 8
		);
	};
	const handleNewPassword = (e) => {
		e.preventDefault();
		setNewPassword(e.target.value);

		setIsValid(
			oldPassword.trim() === e.target.value.trim() &&
				newPassword.trim().length >= 8
		);
	};

	const submitHandle = (e) => {
		e.preventDefault();
		props.submitForm(newPassword);
	};

	return (
		<form className='mt-10' onSubmit={submitHandle}>
			<div className='flex flex-col mt-3'>
				<label
					className='text-gray-color relative input__label w-fit'
					htmlFor='Old-Password'>
					Password
				</label>
				<input
					type='password'
					name='Old-Password'
					id='Old-Password'
					className={`input mt-3 text-white pr-5 border-1 px-[20px] py-[16px] ${
						isValid === true
							? "border-green"
							: isValid === false
							? "border-red"
							: "border-gray-500"
					} outline-none bg-transparent rounded-md border border-gray-300`}
					placeholder='**************'
					onChange={handleOldPassword}
				/>
			</div>
			<div className='flex flex-col mt-3'>
				<label
					className='text-gray-color relative input__label w-fit'
					htmlFor='Confirm-Password'>
					Confirm Password
				</label>
				<input
					type='password'
					name='Confirm-Password'
					id='Confirm-Password'
					className={`input mt-3 text-white pr-5 border-1 px-[20px] py-[16px] ${
						isValid === true
							? "border-green"
							: isValid === false
							? "border-red"
							: "border-gray-500"
					} outline-none bg-transparent rounded-md border border-gray-300`}
					placeholder='**************'
					onChange={handleNewPassword}
				/>
			</div>
			<Button
				text='Login Now'
				func={props.onSubmitHandler}
				type={"submit"}
				className={`w-full h-[52px] bg-[#3D3BFF] text-white shadow-[0_0_15px_rgba(0,0,0,0.7)_inset] font-bold rounded-xl mt-[34px]`}
			/>
		</form>
	);
};
export default Form;
