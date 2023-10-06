import { useState } from "react";
import FirstQuestion from "../components/PersonalityQuestions/FirstQuestion";
import SecondQuestion from "../components/PersonalityQuestions/SecondQuestion";
import Button from "../components/Button";

const questions = [
  {
    id: 0,
    question: "Q1",
    first_answer: null,
    second_answer: null,
    isAnswered: false,
  },
  {
    id: 1,
    question: "Q2",
    first_answer: null,
    second_answer: null,
    isAnswered: false,
  },
  {
    id: 2,
    question: "Q3",
    first_answer: null,
    second_answer: null,
    isAnswered: false,
  },
  {
    id: 3,
    question: "Q4",
    first_answer: null,
    second_answer: null,
    isAnswered: false,
  },
  {
    id: 4,
    question: "Q5",
    first_answer: null,
    second_answer: null,
    isAnswered: false,
  },
  {
    id: 5,
    question: "Q6",
    first_answer: null,
    second_answer: null,
    isAnswered: false,
  },
  {
    id: 6,
    question: "Q7",
    first_answer: null,
    second_answer: null,
    isAnswered: false,
  },
  {
    id: 7,
    question: "Q8",
    first_answer: null,
    second_answer: null,
    isAnswered: false,
  },
  {
    id: 8,
    question: "Q9",
    first_answer: null,
    second_answer: null,
    isAnswered: false,
  },
  {
    id: 9,
    question: "Q10",
    first_answer: null,
    second_answer: null,
    isAnswered: false,
  },
  {
    id: 10,
    question: "Q11",
    first_answer: null,
    second_answer: null,
    isAnswered: false,
  },
  {
    id: 11,
    question: "Q12",
    first_answer: null,
    second_answer: null,
    isAnswered: false,
  },
];
const PersonalityQuestions = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
  const [questionsArray, setQuestionsArray] = useState(questions);
  const [isAllowed, setIsAllowed] = useState(false);

  console.log("PersonalityQuestions");

  const handleNext = () => {
    // getting the radio inputs
    const answeredQuestions = questionsArray.filter(
      (question) => question.isAnswered
    ).length;

    console.log(answeredQuestions);

    // select and loop through the inputs to highlight the answered questions
    const inputsRadio = document.querySelectorAll(".question");
    for (let i = 0; i < answeredQuestions; i++) {
      inputsRadio[i].classList.add("anwered_circle");
    }

    // select all the big circles
    const bigCircles = document.querySelectorAll(".circle");

    // check if the number on asnwered question is grater than 3 and less than 6
    if (answeredQuestions >= 3 && answeredQuestions < 6) {
      bigCircles[0].classList.remove("answered");
      bigCircles[0].classList.add("answered_full");

      bigCircles[1].classList.add("answered");
    }
    // check if the number on asnwered question is grater than 6 and less than 9
    else if (answeredQuestions >= 6 && answeredQuestions < 9) {
      bigCircles[1].classList.remove("answered");
      bigCircles[1].classList.add("answered_full");

      bigCircles[2].classList.add("answered");
    }
    // check if the number on asnwered question is grater than 9 and less than 12
    else if (answeredQuestions >= 9 && answeredQuestions < 12) {
      bigCircles[2].classList.remove("answered");
      bigCircles[2].classList.add("answered_full");

      bigCircles[3].classList.add("answered");
    }
    // check if the number on asnwered question equals 12
    else if (answeredQuestions === 12) {
      bigCircles[3].classList.remove("answered");
      bigCircles[3].classList.add("answered_full");
    }

    // set states
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setCurrentQuestion(questionsArray[currentQuestionIndex + 1]);
    console.log(currentQuestion);

    setIsAllowed(questionsArray[currentQuestionIndex + 1].isAnswered);
  };
  const handlePrev = () => {
    setCurrentQuestionIndex(currentQuestionIndex - 1);
    setCurrentQuestion(questionsArray[currentQuestionIndex - 1]);
    console.log(currentQuestion);
    setIsAllowed(questionsArray[currentQuestionIndex - 1].isAnswered);
  };

  const handleChangeFirstAnswer = (answer) => {
    const updatedQuestions = questionsArray;
    updatedQuestions[currentQuestionIndex].first_answer = answer;
    setQuestionsArray(updatedQuestions);
    if (answer && currentQuestion.second_answer) {
      currentQuestion.isAnswered = true;
      setIsAllowed(true);
    } else {
      setIsAllowed(false);
    }
  };

  const handleChangeSecondAnswer = (answer) => {
    const updatedQuestions = questionsArray;
    updatedQuestions[currentQuestionIndex].second_answer = answer;
    setQuestionsArray(updatedQuestions);
    if (answer && currentQuestion.first_answer) {
      currentQuestion.isAnswered = true;
      setIsAllowed(true);
    } else {
      setIsAllowed(false);
    }
  };

  const SubmitHandler = () => {
    console.log(questionsArray);
  };

  return (
    <div className='flex flex-col items-center py-[45px] px-[10px]'>
      <div className='big_circles w-[286px] md:w-[637px] flex justify-between'>
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
      <div className='small_circle w-[270px] md:w-[479px] flex justify-between mt-[75px]'>
        <div className='question w-[8px] h-[8px] bg-[#707070] rounded-md relative'></div>
        <div className='question w-[8px] h-[8px] bg-[#707070] rounded-md relative'></div>
        <div className='question w-[8px] h-[8px] bg-[#707070] rounded-md relative'></div>
        <div className='question w-[8px] h-[8px] bg-[#707070] rounded-md relative'></div>
        <div className='question w-[8px] h-[8px] bg-[#707070] rounded-md relative'></div>
        <div className='question w-[8px] h-[8px] bg-[#707070] rounded-md relative'></div>
        <div className='question w-[8px] h-[8px] bg-[#707070] rounded-md relative'></div>
        <div className='question w-[8px] h-[8px] bg-[#707070] rounded-md relative'></div>
        <div className='question w-[8px] h-[8px] bg-[#707070] rounded-md relative'></div>
        <div className='question w-[8px] h-[8px] bg-[#707070] rounded-md relative'></div>
        <div className='question w-[8px] h-[8px] bg-[#707070] rounded-md relative'></div>
        <div className='question w-[8px] h-[8px] bg-[#707070] rounded-md relative'></div>
      </div>

      <FirstQuestion
        question={currentQuestion}
        onAnswerFirstQuestion={handleChangeFirstAnswer}
      />
      <SecondQuestion
        question={currentQuestion}
        onAnswerSecondQuestion={handleChangeSecondAnswer}
      />

      <div className='actions mt-[62px] md:mt-[70px] lg:mt-[100xp]'>
        {/* text, func, type, className */}
        {currentQuestionIndex !== 0 && (
          <Button
            text={"Back"}
            func={handlePrev}
            type={"button"}
            className={
              "w-[153px] md:w-[250px] max-w-full h-[53px] py-[9px] px-[40px] rounded-[8px] border border-[#f9f7f340] mr-[11px] font-bold"
            }
          ></Button>
        )}
        {currentQuestionIndex !== questions.length - 1 && (
          //   <Button
          //     text={"Next"}
          //     func={handleNext}
          //     type={"button"}
          //     className={
          //       "w-[153px] md:w-[250px] max-w-full h-[53px] py-[9px] px-[40px] rounded-[8px] bg-blue-brand shadow-light-inset"
          //     }
          //   ></Button>

          <button
            className={
              "w-[153px] md:w-[250px] max-w-full h-[53px] py-[9px] px-[40px] rounded-[8px] bg-blue-brand shadow-light-inset font-bold"
            }
            type={"button"}
            onClick={handleNext}
            disabled={!isAllowed}
          >
            Next
          </button>
        )}

        {currentQuestionIndex === questions.length - 1 && (
          //   <Button
          //     text={"Submit"}
          //     func={SubmitHandler}
          //     type={"button"}
          //     className={
          //       "w-[153px] md:w-[243px] max-w-full h-[53px] px-[40px] py-[9px] rounded-md bg-blue-brand shadow-light-inset font-bold"
          //     }
          //   />

          <button
            className={
              "w-[153px] md:w-[250px] max-w-full h-[53px] py-[9px] px-[40px] rounded-[8px] bg-blue-brand shadow-light-inset font-bold"
            }
            type={"button"}
            onClick={SubmitHandler}
            disabled={!isAllowed}
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};
export default PersonalityQuestions;
