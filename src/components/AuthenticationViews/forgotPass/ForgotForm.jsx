import React, { useState } from "react";
import Button from "../../Button";

const ForgotForm = ({ handleSubmit }) => {
	const [email, setEmail] = useState("");
	return (
		<form onSubmit={handleSubmit} className='flex flex-col gap-3'>
			<label
				className='text-[#BDBDBD] relative input__label w-fit'
				htmlFor='Email'>
				Email Address
			</label>
			<input
				required
				className='bg-transparent border border-gray-500 rounded-lg py-[16px] px-[20px] w-full text-white'
				type='email'
				name='email'
				placeholder='John.snow@gmail.com'
				onChange={(e) => setEmail(e.target.value)}
			/>

			{/* Move the button inside the form */}
			<Button
				type='submit'
				className='mt-4 bg-blue-brand text-white w-full h-14 rounded-xl border border-gray-900 font-bold tracking-widest shadow-dark-inset'
				text='Send Reset Instructions'
			/>
		</form>
	);
};

export default ForgotForm;
