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

const initialState = {
  questions: [],
  status: "idle",
  index: 0,
  answer: null,
  points: 0,
  difficulty: "easy",
  category: "23",
};

function reducer(state, action) {
  switch (action.type) {
    case "dataRecieved": {
      const temp = {
        ...state,
        questions: action.payload,
        // incorrect_answers: action.payload.results.incorrect_answers,
        // correct_answer: action.payload.results.correct_answer,
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
    default:
      throw new Error("Action unknown");
  }
}

function App() {
  const [
    { status, questions, index, answer, points, category, difficulty },
    dispatch,
  ] = useReducer(reducer, initialState);
  console.log("diff from app", difficulty);
  console.log("category from app", category);
  const [isLoading, setIsLoading] = useState(false);
  console.log("questions", questions);
  console.log("question length", questions.length);
  console.log(status);
  const numQuestions = questions.length;
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
  console.log(
    "fetch",
    `https://opentdb.com/api.php?amount=15&category=${category}&difficulty=${difficulty}&type=multiple`
  );
  return (
    <div>
      <Header />
      <main>
        {/* {isLoading && <Loader />} */}
        {status === "error" && <Error />}
        {status === "idle" && <StartScreen dispatch={dispatch} />}
        {status === "ready" && questions.length > 0 && (
          <>
            <Question
              question={questions[index]}
              dispatch={dispatch}
              answer={answer}
            />
            <NextButton
              dispatch={dispatch}
              answer={answer}
              index={index}
              numQuestions={numQuestions}
            />
          </>
        )}

        <Footer></Footer>

        {status === "finished" && (
          <FinishedScreen points={points} dispatch={dispatch} />
        )}
      </main>
    </div>
  );
}

export default App;
