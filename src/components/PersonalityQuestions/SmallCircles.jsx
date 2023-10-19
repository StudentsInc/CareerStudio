const SmallCircles = (props) => {
  return (
    <div className='small_circle w-[270px] md:w-[479px] flex justify-between mt-[75px]'>
      {props.questions.map((question) => {
        return (
          <div
            key={question.id}
            className='question w-[8px] h-[8px] bg-[#707070] rounded-md relative'
          ></div>
        );
      })}
    </div>
  );
};
export default SmallCircles;
