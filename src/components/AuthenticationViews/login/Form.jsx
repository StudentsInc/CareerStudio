import { Link } from "react-router-dom";
import Button from "../../Button";
import { facebook, google } from "../../../assets/images";

const Form = ({ handleChange, handleSubmit }) => {
	return (
		<form onSubmit={handleSubmit} className='flex flex-col gap-3 mb-[54px]'>
			<label
				className='text-[#BDBDBD] relative input__label w-fit'
				htmlFor='Email'>
				Email Address
			</label>
			<input
				required
				className='bg-transparent border border-gray-500 rounded-lg py-[16px] px-[20px] text-white w-full'
				type='email'
				name='email'
				placeholder='John.snow@gmail.com'
				autoComplete='current-email'
				onChange={handleChange}
			/>
			<label
				className='text-[#BDBDBD] relative input__label w-fit'
				htmlFor='Password'>
				Password
			</label>
			<input
				required
				className='bg-transparent border border-gray-500 rounded-lg py-[16px] px-[20px] text-white w-full'
				type='password'
				name='password'
				placeholder='************'
				autoComplete='current-password'
				onChange={handleChange}
			/>
			<div className='flex justify-between items-center'>
				<div className='text-white text-xs'>
					<div className='checkboxes__item'>
						<label className='checkbox-remember-me flex justify-between items-center relative cursor-pointer select-none'>
							<div className='flex gap-[10px] items-center'>
								<input className='opacity-0 absolute' type='checkbox' />
								<div className='checkbox__checkmark relative h-[15px] w-[15px] bg-gray-300 transition duration-250 ease-in rounded-full'></div>
								<span className='checkbox__body text-white text-gray-500 text-base transition font-normal duration-250 ease-in'>
									Remember me
								</span>
							</div>
						</label>
					</div>
				</div>
				<Link to={"/forgotPassword"}>
					<div className='text-[#818CF8] text-xs'>Forgot password?</div>
				</Link>
			</div>
			<div className='flex flex-col gap-[7px] mt-[36px]'>
				<Button
					type='submit'
					text='Login now'
					className='text-white font-bold tracking-wide bg-blue-brand rounded-xl py-[16px] px-[20px] shadow-dark-inset'
				/>
				<button
					type='submit'
					className='flex items-center justify-center bg-[#2D3748] text-white w-full h-14 rounded-xl border border-gray-900 font-bold tracking-widest shadow-inner shadow-black'>
					<img src={google} alt='Google' className='mr-3' />
					Signup with Google
				</button>
				<button
					type='submit'
					className='flex items-center justify-center bg-[#2D3748] text-white w-full h-14 rounded-xl border border-gray-900 font-bold tracking-widest shadow-inner shadow-black'>
					<img src={facebook} alt='Facebook' className='mr-3' />
					Signup with Facebook
				</button>
			</div>
		</form>
	);
};

export default Form;
