import React, { useEffect, useState } from "react";
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

  const decodeHTML = (html) => {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  };

  return (
    <div className="flex flex-col justify-around mx-auto gap-5 font-primary md:text-xl">
      {randomOptions.map((option, index) => (
        <button
          className={` px-3 py-2 rounded-xl border border-white ${
            hasAnswered
              ? option === question.correct_answer
                ? "bg-btn-bg border-none"
                : "bg-red-700 border-none"
              : ""
          }`}
          key={option}
          onClick={() => handleOptionClick(option)}
          disabled={hasAnswered}
          label={option}
        >
          {decodeHTML(option)}
        </button>
      ))}
    </div>
  );
};

export default Options;
