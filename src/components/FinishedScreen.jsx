const FinishedScreen = ({ points, dispatch, maxPossiblePoints }) => {
  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🥈";
  if (percentage >= 50 && percentage < 80) emoji = "🥉";
  if (percentage >= 0 && percentage < 50) emoji = "🎉";
  if (percentage === 0) emoji = "🤦‍♂️";

  return (
    <>
      <div className="flex flex-col bg-[#fece2f] rounded-xl mx-4 px-4 py-4">
        <p className="font-primary text-center">
          <span>{emoji}</span>
          You scored <strong>{points}</strong> out of {maxPossiblePoints} (
          {Math.ceil(percentage)}%)
        </p>
      </div>
      <div className="flex w-full justify-center mt-4">
        <button
          className="py-2 rounded-xl text-[#FECE2F]  font-primary text-xl  border-2 border-[#FECE2F]    px-4 pt-1 pb-1 "
          onClick={() => dispatch({ type: "reset" })}
        >
          Reset Quiz
        </button>
      </div>
    </>
  );
};

export default FinishedScreen;
