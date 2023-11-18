/* Component to display question */

import React from "react";
import { useSelector } from "react-redux";
import '../styles/CurrentQuestion.css';

export const CurrentQuestion = () => {
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );

  if (!question) {
    return <h1>Oh no! I could not find the current question!!</h1>;
  }

  return (
    <div className="current-question">
      <h1>Question: {question.questionText}</h1>
    </div>
  );
};
