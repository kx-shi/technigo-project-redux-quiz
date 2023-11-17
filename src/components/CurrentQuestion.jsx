import React from "react";
import { useSelector } from "react-redux";
import { CurrentAnswers } from "./CurrentAnswers";
import { SelectedAnswer } from "./SelectedAnswer";

export const CurrentQuestion = () => {
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );

  return (
    <div>
      <h1>Question: {question.questionText}</h1>
      <CurrentAnswers />
      <SelectedAnswer />
    </div>
  );
};
