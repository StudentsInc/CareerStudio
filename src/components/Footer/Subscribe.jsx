import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";

const Subscribe = () => {
	const [email, setEmail] = useState("");
	const handleSubmit = (e) => {
		e.preventDefault();
		//logic here
		console.log("Email:", email);
		// Reset the email field after submission
		setEmail("");
	};

	const handleChange = (e) => {
		setEmail(e.target.value);
	};

	return (
		<form
			className='flex flex-col w-100 lg:w-[338px] h-auto xs:h-[220px]  bg-white/10  p-10'
			onSubmit={handleSubmit}>
			<label
				className='font-bold  leading-[28px] mb-[16px]'
				htmlFor='emailInput'>
				Subscribe
			</label>
			<div className='flex'>
				<input
					className='w-[80%] text-[0.8rem] text-black xs:text-[1rem] bg-white h-[50px] rounded-tl-[6px] rounded-bl-[6px] border-[2px] ps-[16px] mb-[20px] flex focus:outline-none'
					type='email'
					id='emailInput'
					placeholder='Email address'
					value={email}
					onChange={handleChange}
				/>
				<button
					className='h-[50px] w-[50px] rounded-tr-[6px] rounded-br-[6px] bg-blue-brand flex items-center justify-center text-[1.6rem]'
					type='submit'
					aria-label='Submit Form'>
					<FiArrowRight />
				</button>
			</div>
			<p className='text-[0.75rem] font-normal text-white/60 leading-[20.4px]'>
				Lorem ipsum dolor sit amet consectetur. Ut amet neque nulla est in.
			</p>
		</form>
	);
};

export default Subscribe;
