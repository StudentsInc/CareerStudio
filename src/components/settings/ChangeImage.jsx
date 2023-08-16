import React from "react";
const ChangeImage = ({ setSelectedImage, selectedImage }) => {
	console.log(selectedImage);
	const handleImageChange = (event) => {
		console.log(event);
		const file = event.target.files[0];
		if (file) {
			setSelectedImage(URL.createObjectURL(file));
		}
	};

	const handleRemoveImage = () => {
		setSelectedImage(null);
	};
	return (
		<div className='image_control max-[640px]:w-full flex flex-col sm:flex-row gap-[19px] mb-5'>
			<label
				htmlFor='image-input'
				className='bg-blue-brand shadow-[0_0_20px_rgba(0,0,0,0.30),0_0_20px_rgba(0,0,0,0.60)_inset] flex justify-center items-center cursor-pointer w-full sm:w-[187px] text-center py-[0.8rem] sm:h-[45px] rounded-lg'>
				Upload Image
			</label>
			<input
				id='image-input'
				className='hidden w-full sm:w-[187px]'
				type='file'
				accept='image/*'
				onChange={handleImageChange}
			/>
			{selectedImage && (
				<button
					className='bg-blue-brand shadow-[0_0_30px_rgba(0,0,0,0.30),0_0_20px_rgba(0,0,0,0.60)_inset]  flex justify-center items-center cursor-pointer shadow-dark-inset shadow-dark-outset w-full sm:w-[187px] text-center py-[0.8rem] sm:h-[45px] rounded-lg'
					onClick={handleRemoveImage}>
					Remove Image
				</button>
			)}
		</div>
	);
};

export default ChangeImage;
