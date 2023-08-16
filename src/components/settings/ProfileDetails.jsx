import React, { useState } from "react";
import ChangeImage from "./ChangeImage";
import ChangeEmail from "./ChangeEmail";

const ProfileDetails = () => {
	const [selectedImage, setSelectedImage] = useState(null);
	return (
		<div className='card_container w-full lg:w-[72%] flex flex-col gap-[37px]'>
			<div className='card sm:bg-gray-card/70 p-[1.5rem]  rounded-3xl sm:border-s border-blue-brand/80 overflow-hidden'>
				<h2 className='text-[1.875rem] font-bold '>Profile Details</h2>
				<div className='change_image flex flex-row max-[280px]:flex-col items-center gap-[2rem]  mt-[20px]'>
					{selectedImage && (
						<div className='image-preview w-full'>
							<img
								className='w-[100px] h-[100px] rounded-full shadow-[0_6px_8px_#222]'
								src={selectedImage}
								alt='Selected'
							/>
						</div>
					)}
					<ChangeImage
						setSelectedImage={setSelectedImage}
						selectedImage={selectedImage}
					/>
				</div>
				<div className='change_email mt-[21px]'>
					<ChangeEmail />
				</div>
			</div>
		</div>
	);
};

export default ProfileDetails;
