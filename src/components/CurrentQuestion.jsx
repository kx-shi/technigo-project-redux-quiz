import React from "react";
import { useSelector } from "react-redux";

export const CurrentQuestion = () => {
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );

  const currentIdx = useSelector(
    (state) => state.quiz.currentQuestionIndex
  )

  //console.log(currentIdx)

  return (
    <div>
      <h1>Question: {question.questionText}</h1>
    </div>
  );
};
