import { useEffect, useState } from "react";

const ChangeEmail = () => {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		updatedEmail: "",
	});

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleFormSubmit = (event) => {
		event.preventDefault();
		const generatedEmail = `${formData.firstName.toLowerCase()}.${formData.lastName.toLowerCase()}@gmail.com`;
		setFormData({
			...formData,
			updatedEmail: generatedEmail,
		});
	};

	useEffect(() => {
		const handleEnterKeyPress = (event) => {
			if (event.key === "Enter") {
				event.preventDefault(); // Prevents default form submission
				handleFormSubmit(event);
			}
		};

		document.addEventListener("keydown", handleEnterKeyPress);

		return () => {
			document.removeEventListener("keydown", handleEnterKeyPress);
		};
	}, [formData]);
	return (
		<form
			className='flex flex-wrap gap-y-6 justify-start'
			onSubmit={handleFormSubmit}>
			<div className='mr-[18px] flex flex-col w-[177px]'>
				<label className='text-[1.25rem] mb-1' htmlFor='firstName'>
					First Name:
				</label>
				<input
					className='w-full border rounded-md py-[16px] px-2 h-[37px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
					id='firstName'
					type='text'
					name='firstName'
					value={formData.firstName}
					onChange={handleInputChange}
					placeholder='Enter your first name'
				/>
			</div>
			<div className='flex flex-col w-[177px]'>
				<label className='text-[1.25rem] mb-1' htmlFor='lastName'>
					Last Name:
				</label>
				<input
					className='w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
					id='lastName'
					type='text'
					name='lastName'
					value={formData.lastName}
					onChange={handleInputChange}
					placeholder='Enter your last name'
				/>
			</div>
			<div className='md:ms-[54px] w-[92%] md:w-auto'>
				<p className='mb-[6px] text-[20px]'>Your Email:</p>
				<strong className='text-[18px]'>{formData.updatedEmail}</strong>
			</div>
		</form>
	);
};

export default ChangeEmail;
