import React from "react";
import Options from "./Options";

const Question = ({ question, answer, dispatch }) => {
  const decodedQuestion = decodeHTML(question?.question);

  return (
    <div>
      <h3 dangerouslySetInnerHTML={{ __html: decodedQuestion }} />
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
