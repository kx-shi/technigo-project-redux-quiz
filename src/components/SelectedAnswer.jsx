/** Component that lists the user chosen answer and displays whether it was correct or not
 *  This component follows the state of quiz.quizOver to decide whether to display its content or not.
 */

import React from "react";
import { useSelector } from "react-redux";
import '../styles/SelectedAnswer.css';

export const SelectedAnswer = () => {
  const selectedAnswer = useSelector((state) => state.quiz.answers[state.quiz.currentQuestionIndex]);
  const isQuizOver = useSelector((state) => state.quiz.quizOver);

  if (!selectedAnswer) {
    return (
      <div className="selected-answer">
        <span>No answer selected</span>
      </div>
    );
  }

  return (
    <div className="selected-answer">
      { !isQuizOver && <p>You have selected: {selectedAnswer.answer}.</p> }
      { !isQuizOver && <p>It was {selectedAnswer.isCorrect ? 'correct' : 'not correct'}</p> }
    </div>
  );
};
