import Button from "./Button";

const NextButton = ({ dispatch, answer, index, numQuestions }) => {
  if (answer === null) return null;

  if (index < numQuestions - 1)
    return (
      <div className="flex w-auto justify-center items-center">
        <button
          className="py-2 rounded-xl text-[#FECE2F]  font-primary text-xl  border-2 border-[#FECE2F] text-center   px-4 pt-1 pb-1 "
          onClick={() => dispatch({ type: "nextQuestion" })}
        >
          Next
        </button>
      </div>
    );
  if (index === numQuestions - 1)
    return (
      <button
        className="py-2 rounded-xl text-[#FECE2F]  font-primary text-xl  border-2 border-[#FECE2F] text-center   px-4 pt-1 pb-1 "
        onClick={() => dispatch({ type: "finished" })}
      >
        Finish
      </button>
    );
};

export default NextButton;
