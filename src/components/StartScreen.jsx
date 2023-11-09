const StartScreen = ({ dispatch, numQuestions }) => {
  const handleDifficultyChange = (e) => {
    dispatch({ type: "selectDifficulty", payload: e.target.value });
  };
  const handleCategoryChange = (e) => {
    dispatch({ type: "selectCategory", payload: e.target.value });
  };
  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-xl">Welcome to the quiz!</h2>
      <div>
        <h3>Choose your difficulty:</h3>
        <select onChange={handleDifficultyChange}>
          <option value="easy">easy</option>
          <option value="medium">medium</option>
          <option value="hard">hard</option>
        </select>
      </div>
      <div>
        <h3>Select category:</h3>
        <select onChange={handleCategoryChange}>
          <option value="26">celebrities</option>
          <option value="23">history</option>
          <option value="20">Mythology</option>
          <option value="9">General Knowledge</option>
          <option value="11">Film</option>
          <option value="12">Music</option>
          <option value="15 Games">Video Games</option>
        </select>
      </div>
      <button onClick={() => dispatch({ type: "start" })}>Lets start</button>
    </div>
  );
};

export default StartScreen;
