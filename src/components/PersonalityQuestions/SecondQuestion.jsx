import { strongly_agree } from "../../assets/images";
import { agree } from "../../assets/images";
import { neutural } from "../../assets/images";
import { disagree } from "../../assets/images";
import { strongly_disagree } from "../../assets/images";
const SecondQuestion = (props) => {
  const selectAnswerHandler = (answerText) => {
    props.onAnswerSecondQuestion(answerText);
  };
  return (
    <div className='pt-[80px]'>
      <h1 className='font-bold md:font-normal text-[20px]'>
        {props.question.question}
      </h1>
      <div className='answers grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-[10px] place-items-center mt-[15px] md:mt-[40px] lg:mt-[50px]'>
        <div className='w-[220px] max-w-full h-[40px] bg-[#232332] hover:bg-[#3D3BFF] transition-all rounded-[5px] flex justify-center items-center'>
          <div className='flex items-center md:justify-center pl-[20px] lg:pl-0 w-full'>
            <img
              src={strongly_agree}
              alt='strongly agree'
            />
            <label
              htmlFor='radio-2-1'
              className='w-full lg:w-fit h-full flex items-center px-[10px] text-center cursor-pointer'
            >
              Strongly agree
            </label>
          </div>
          <input
            type='radio'
            id='radio-2-1'
            name='second-answer'
            className='second_question_answer hidden'
            value={"Strongly agree"}
            onChange={() => selectAnswerHandler("Strongly agree")}
          />
        </div>
        <div className='w-[220px] max-w-full h-[40px] bg-[#232332] hover:bg-[#3D3BFF] transition-all rounded-[5px] flex justify-center items-center'>
          <div className='flex items-center md:justify-center pl-[20px] lg:pl-0 w-full'>
            <img
              src={agree}
              alt='agree'
            />
            <label
              htmlFor='radio-2-2'
              className='w-full lg:w-fit h-full flex items-center px-[10px] text-center cursor-pointer'
            >
              Agree
            </label>
          </div>
          <input
            type='radio'
            id='radio-2-2'
            name='second-answer'
            className='second_question_answer hidden'
            value={"Agree"}
            onChange={() => selectAnswerHandler("Agree")}
          />
        </div>
        <div className='w-[220px] max-w-full h-[40px] bg-[#232332] hover:bg-[#3D3BFF] transition-all rounded-[5px] flex justify-center items-center'>
          <div className='flex items-center md:justify-center pl-[20px] lg:pl-0 w-full'>
            <img
              src={neutural}
              alt='neutural'
            />
            <label
              htmlFor='radio-2-3'
              className='w-full lg:w-fit h-full flex items-center px-[10px] text-center cursor-pointer'
            >
              Neutural
            </label>
          </div>
          <input
            type='radio'
            id='radio-2-3'
            name='second-answer'
            className='second_question_answer hidden'
            value={"Neutural"}
            onChange={() => selectAnswerHandler("Neutural")}
          />
        </div>
        <div className='w-[220px] max-w-full h-[40px] bg-[#232332] hover:bg-[#3D3BFF] transition-all rounded-[5px] flex justify-center items-center'>
          <div className='flex items-center md:justify-center pl-[20px] lg:pl-0 w-full'>
            <img
              src={disagree}
              alt='disagree'
            />
            <label
              htmlFor='radio-2-4'
              className='w-full lg:w-fit h-full flex items-center px-[10px] text-center cursor-pointer'
            >
              Disagree
            </label>
          </div>
          <input
            type='radio'
            id='radio-2-4'
            name='second-answer'
            className='second_question_answer hidden'
            value={"Disagree"}
            onChange={() => selectAnswerHandler("Disagree")}
          />
        </div>
        <div className='w-[220px] max-w-full h-[40px] bg-[#232332] hover:bg-[#3D3BFF] transition-all rounded-[5px] flex justify-center items-center'>
          <div className='flex items-center md:justify-center pl-[20px] lg:pl-0 w-full'>
            <img
              src={strongly_disagree}
              alt='strongly disagree'
            />
            <label
              htmlFor='radio-2-5'
              className='w-full lg:w-fit h-full flex items-center px-[10px] text-center cursor-pointer'
            >
              Strongly disagree
            </label>
          </div>
          <input
            type='radio'
            id='radio-2-5'
            name='second-answer'
            className='second_question_answer hidden'
            value={"Strongly disagree"}
            onChange={() => selectAnswerHandler("Strongly disagree")}
          />
        </div>
      </div>
    </div>
  );
};
export default SecondQuestion;
