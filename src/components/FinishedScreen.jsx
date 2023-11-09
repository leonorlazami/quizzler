const FinishedScreen = ({ points, dispatch }) => {
  return (
    <div>
      you scored {points}
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default FinishedScreen;
