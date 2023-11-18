/* Component to show progress of the quiz */

import React from "react";
import { useSelector } from "react-redux";
import '../styles/ProgressBar.css';

export const ProgressBar = () => {
  const totalQuestions = useSelector(
    (state) => state.quiz.questions.length
  );

  const currentQuestion = useSelector(
    (state) => state.quiz.currentQuestionIndex + 1
  );

  return (
    <span className="progress-bar">
      <h1>Question {currentQuestion} / {totalQuestions}</h1>
    </span>
  );
};
