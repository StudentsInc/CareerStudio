const BigCircles = () => {
  return (
    <div className='big_circles w-[286px] md:w-[637px] flex justify-between -ml-[40px]'>
      <div className='relative'>
        <span className='circle answered absolute w-[30px] h-[30px] rounded-[50%] border-[3px] border-[#6b7280]'></span>
        <span className='absolute w-[67px] md:w-[183px] h-[3px] left-[30px] top-[12.5px] bg-[#6b7280]'></span>
      </div>
      <div className='relative'>
        <span className='circle absolute w-[30px] h-[30px] rounded-[50%] border-[3px] border-[#6b7280]'></span>
        <span className='absolute w-[67px] md:w-[183px] h-[3px] left-[30px] top-[12.5px] bg-[#6b7280]'></span>{" "}
      </div>
      <div className='relative'>
        <span className='circle absolute w-[30px] h-[30px] rounded-[50%] border-[3px] border-[#6b7280]'></span>
        <span className='absolute w-[67px] md:w-[183px] h-[3px] left-[30px] top-[12.5px] bg-[#6b7280]'></span>{" "}
      </div>
      <div className='relative'>
        <span className='circle absolute w-[30px] h-[30px] rounded-[50%] border-[3px] border-[#6b7280]'></span>
      </div>
    </div>
  );
};
export default BigCircles;
