import { useEffect, useState } from "react";

const Options = ({ question, dispatch, answer }) => {
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
    <div>
      {randomOptions.map((option, index) => (
        <button
          className={`${
            hasAnswered && option === question.correct_answer
              ? "bg-blue-500"
              : "bg-black"
          } text-white mr-4`}
          key={index}
          onClick={() => handleOptionClick(option)}
          disabled={hasAnswered}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Options;
