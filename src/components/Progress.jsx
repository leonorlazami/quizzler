const Progress = ({
  index,
  numQuestions,
  points,
  maxPossiblePoints,
  answer,
}) => {
  return (
    <div className="flex flex-col justify-center items-center mt-6 text-white md:w-[66%] md:mx-auto">
      <progress
        max={numQuestions}
        value={index + Number(answer !== null)}
        className="w-[80%] h-4 rounded-full bg-red-300"
      />
      <div className="flex justify-around w-full mt-4">
        <p>
          Question <strong>{index + 1}</strong> / {numQuestions}
        </p>

        <p>
          Points <strong>{points}</strong> / {maxPossiblePoints}
        </p>
      </div>
    </div>
  );
};

export default Progress;
