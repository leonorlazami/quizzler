import { useEffect, useState } from "react";
import Button from "./Button";
import NextButton from "./NextButton";

const Options = ({ question, dispatch, answer, numQuestion }) => {
  const [randomOptions, setRandomOptions] = useState([]);

  useEffect(() => {
    const options = question?.incorrect_answers.slice();
    if (!options.includes(question?.correct_answer)) {
      options.push(question.correct_answer);
    }
    const random = options.sort(() => Math.random() - 0.5);
    setRandomOptions(random);
  }, [question]);

  const handleOptionClick = (selectedOption) => {
    if (!hasAnswered) {
      dispatch({ type: "newAnswer", payload: selectedOption });
    }
    if (selectedOption === question.correct_answer) {
      dispatch({ type: "correctAnswer" });
    }
  };
  const hasAnswered = answer !== null;
  return (
    <div className="flex flex-col justify-around mx-auto gap-5 font-primary">
      {randomOptions.map((option, index) => (
        <button
          className={`border border-[#FECE2F] px-3 py-2 rounded-xl ${
            hasAnswered
              ? option === question.correct_answer
                ? "bg-gradient-to-r from-[#00B4D8] via-blue-500 to-blue-900 border-none"
                : "bg-gradient-to-r from-[#FF3C38] via-red-500 to-red-900 border-red-900 "
              : ""
          }`}
          key={option}
          onClick={() => handleOptionClick(option)}
          disabled={hasAnswered}
          label={option}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Options;
