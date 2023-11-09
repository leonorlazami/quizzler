const NextButton = ({ dispatch, answer, index, numQuestions }) => {
  if (answer === null) return null;

  if (index < numQuestions - 1)
    return (
      <button onClick={() => dispatch({ type: "nextQuestion" })}>Next</button>
    );
  if (index === numQuestions - 1)
    return (
      <button onClick={() => dispatch({ type: "finished" })}>Finish</button>
    );
};

export default NextButton;
