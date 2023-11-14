import { useEffect } from "react";

const Timer = ({ dispatch, secondsRemaining }) => {
  useEffect(() => {
    let intervalId;

    if (secondsRemaining > 0) {
      intervalId = setInterval(() => {
        dispatch({ type: "tick" });
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [dispatch, secondsRemaining]);

  useEffect(() => {
    if (secondsRemaining === 0) {
      dispatch({ type: "finished" });
    }
  }, [dispatch, secondsRemaining]);

  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  return (
    <div className="text-[#FECE2F] flex w-1/2 justify-center items-center font-primary font-bold text-xl float-left ">
      <p className="border-2 rounded-xl px-4 pt-1 pb-1  border-[#FECE2F]  text-center">
        {mins < 10 && "0"}
        {mins}:{seconds < 10 && "0"}
        {seconds}
      </p>
    </div>
  );
};

export default Timer;
