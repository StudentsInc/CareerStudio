import { useState } from "react";
import FirstQuestion from "../components/PersonalityQuestions/FirstQuestion";
import SecondQuestion from "../components/PersonalityQuestions/SecondQuestion";
import Button from "../components/Button";
import SmallCircles from "../components/PersonalityQuestions/SmallCircles";
import BigCircles from "../components/PersonalityQuestions/BigCircles";

const questions = [
  {
    id: 0,
    question: "You never get tired of meeting new people. Q1",
    first_answer: null,
    second_answer: null,
    isAnswered: false,
  },
  {
    id: 1,
    question: "You never get tired of meeting new people. Q2",
    first_answer: null,
    second_answer: null,
    isAnswered: false,
  },
  {
    id: 2,
    question: "You never get tired of meeting new people. Q3",
    first_answer: null,
    second_answer: null,
    isAnswered: false,
  },
  {
    id: 3,
    question: "You never get tired of meeting new people. Q4",
    first_answer: null,
    second_answer: null,
    isAnswered: false,
  },
  {
    id: 4,
    question: "You never get tired of meeting new people. Q5",
    first_answer: null,
    second_answer: null,
    isAnswered: false,
  },
  {
    id: 5,
    question: "You never get tired of meeting new people. Q6",
    first_answer: null,
    second_answer: null,
    isAnswered: false,
  },
  {
    id: 6,
    question: "You never get tired of meeting new people. Q7",
    first_answer: null,
    second_answer: null,
    isAnswered: false,
  },
  {
    id: 7,
    question: "You never get tired of meeting new people. Q8",
    first_answer: null,
    second_answer: null,
    isAnswered: false,
  },
  {
    id: 8,
    question: "You never get tired of meeting new people. Q9",
    first_answer: null,
    second_answer: null,
    isAnswered: false,
  },
  {
    id: 9,
    question: "You never get tired of meeting new people. Q10",
    first_answer: null,
    second_answer: null,
    isAnswered: false,
  },
  {
    id: 10,
    question: "You never get tired of meeting new people. Q11",
    first_answer: null,
    second_answer: null,
    isAnswered: false,
  },
  {
    id: 11,
    question: "You never get tired of meeting new people. Q12",
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

  const handleNext = () => {
    // getting the radio inputs
    const answeredQuestions = questionsArray.filter(
      (question) => question.isAnswered
    ).length;

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

    setIsAllowed(questionsArray[currentQuestionIndex + 1].isAnswered);
  };
  const handlePrev = () => {
    setCurrentQuestionIndex(currentQuestionIndex - 1);
    setCurrentQuestion(questionsArray[currentQuestionIndex - 1]);
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
      <BigCircles questions={questions} />

      <SmallCircles questions={questions} />

      <FirstQuestion
        question={currentQuestion}
        onAnswerFirstQuestion={handleChangeFirstAnswer}
      />

      <SecondQuestion
        question={currentQuestion}
        onAnswerSecondQuestion={handleChangeSecondAnswer}
      />

      <div className='actions mt-[62px] md:mt-[70px] lg:mt-[100xp]'>
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
