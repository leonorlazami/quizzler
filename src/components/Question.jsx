import React from "react";
import Options from "./Options";

const Question = ({ question, answer, dispatch, numQuestions }) => {
  const decodedQuestion = decodeHTML(question?.question);

  return (
    <div className="flex flex-col text-white text-md  font-primary mx-4 w-auto gap-5 my-6 px-4  bg-secondary rounded-xl py-5 md:w-[55%] md:mx-auto md:text-xl ">
      <h2
        dangerouslySetInnerHTML={{ __html: decodedQuestion }}
        className="mb-5"
      />

      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
};

function decodeHTML(html) {
  var txt = document.createElement("textarea");
  txt.innerHTML = html;

  return txt.value;
}

export default Question;
