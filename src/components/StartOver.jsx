/** Component to display a 'start again' button which dispatches action.restart from quiz
 *  This component follows the state of quiz.quizOver to decide whether to display the button or not.
 */

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { quiz } from '../reducers/quiz';
import '../styles/StartOver.css';

export const StartOver = () => {
  const isQuizOver = useSelector(
    (state) => state.quiz.quizOver
  );

  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(quiz.actions.restart())
  }

  return (
    <div className="start-again-container">
      {isQuizOver && <button
        type="button"
        className="start-again-btn"
        onClick={() => {handleClick()}}>Quiz over! Start again
      </button>}
    </div>
  );
};
