/** Component to show summary of users answers at the end of the quiz
 * It follows the state of quiz.quizOver to decide whether to display its content or not.
 * It follows the state of quiz.answers to get a list of the users answers
 */

import React from "react";
import { useSelector } from "react-redux";
import '../styles/Summary.css';

export const Summary = () => {
  const isQuizOver = useSelector(
    (state) => state.quiz.quizOver
  );

  const recordedAnswers = useSelector(
    (state) => state.quiz.answers
  );

  /* Number of correct answers is calculated by going through each answer in the 
    * answers list and adding +1 to total if answer was correct
    */
  const correctAnswers = recordedAnswers.reduce((total, answer) => {
    if(answer.isCorrect) {
      return total + 1;
    }
    return total;
  }, 0);

  return (
    <span className="summary">
      {isQuizOver && (<p>Quiz over! You got {correctAnswers} questions correct!</p>)}
    </span>
  );
};
