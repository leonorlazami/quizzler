import { useEffect, useReducer, useState } from "react";
import Error from "./components/Error";
import Header from "./components/Header";
import Loader from "./components/Loader";
import StartScreen from "./components/StartScreen";
import "./styles.css";
import Question from "./components/Question";
import NextButton from "./components/NextButton";
import Footer from "./components/Footer";
import FinishedScreen from "./components/FinishedScreen";
import Timer from "./components/Timer";
import Progress from "./components/Progress";

const SECS_PER_Q = 15;
const initialState = {
  questions: [],
  status: "idle",
  index: 0,
  answer: null,
  points: 0,
  difficulty: "easy",
  category: "23",
  secondsRemaining: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataRecieved": {
      const temp = {
        ...state,
        questions: action.payload,
        secondsRemaining: action.payload.length * SECS_PER_Q,
        status: "ready",
      };

      return temp;
    }
    case "selectCategory": {
      return {
        ...state,
        category: action.payload,
      };
    }
    case "selectDifficulty": {
      return {
        ...state,
        difficulty: action.payload,
      };
    }
    case "dataFailed": {
      return {
        ...state,
        status: "error",
      };
    }
    case "start": {
      return {
        ...state,
        status: "active",
      };
    }
    case "newAnswer": {
      return {
        ...state,
        answer: action.payload,
      };
    }
    case "correctAnswer": {
      return {
        ...state,
        points: state.points + 10,
      };
    }
    case "nextQuestion": {
      return {
        ...state,
        index: state.index + 1,
        answer: null,
      };
    }
    case "finished": {
      return {
        ...state,
        status: "finished",
      };
    }
    case "reset": {
      return {
        ...initialState,
        questions: state.questions,
        status: "idle",
      };
    }
    case "tick":
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status:
          state.secondsRemaining <= 0 && state.status === "active"
            ? "finished"
            : state.status,
      };
    default:
      throw new Error("Action unknown");
  }
}

function App() {
  const [
    {
      status,
      questions,
      index,
      answer,
      points,
      category,
      difficulty,
      secondsRemaining,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  const [isLoading, setIsLoading] = useState(false);

  const numQuestions = questions.length;
  const maxPossiblePoints = questions.length * 10;

  useEffect(
    function () {
      setIsLoading(true);
      if (status === "active") {
        fetch(
          `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`
        )
          .then((res) => res.json())
          .then((data) =>
            dispatch({ type: "dataRecieved", payload: data.results })
          )
          .catch((err) => dispatch({ type: "dataFailed" }));
      }
    },
    [status, category, difficulty]
  );
  console.log(status);
  console.log("seconds", secondsRemaining);
  console.log(questions.length);
  return (
    <div>
      <Header />
      <main>
        {/* {isLoading && <Loader />} */}
        {status === "error" && <Error />}
        {status === "idle" && <StartScreen dispatch={dispatch} />}
        {status === "ready" && questions.length > 0 && (
          <>
            <Progress
              index={index}
              numQuestions={numQuestions}
              dispatch={dispatch}
              maxPossiblePoints={maxPossiblePoints}
              points={points}
            />
            <Question
              question={questions[index]}
              dispatch={dispatch}
              answer={answer}
              numQuestions={numQuestions}
            />

            <Footer>
              <Timer secondsRemaining={secondsRemaining} dispatch={dispatch} />
              <NextButton
                dispatch={dispatch}
                answer={answer}
                index={index}
                numQuestions={numQuestions}
              />
            </Footer>
          </>
        )}

        {status === "finished" && (
          <FinishedScreen
            points={points}
            dispatch={dispatch}
            maxPossiblePoints={maxPossiblePoints}
          />
        )}
      </main>
    </div>
  );
}

export default App;
