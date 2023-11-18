/** Component that maps over answers to create a component for each answer value
 * It follows the state of quiz.quizOver to decide whether to display its content or not.
 * Uses useState to enable/disable answer buttons and show/hide next button.
 */

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { quiz } from "../reducers/quiz";
import { Answer } from "./Answer";
import { NextButton } from './NextButton';
import '../styles/CurrentAnswers.css';

export const CurrentAnswers = () => {
  const [disableClick, setDisableClick] = useState(false)
  const [showNextBtn, setShowNextBtn] = useState(false)

  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex]);
  const isQuizOver = useSelector((state) => state.quiz.quizOver);

  const dispatch = useDispatch()

  /**
   * Function for handling clicking on answer buttons
   * When an answer has been chosen(clicked), disable answer buttons
   * and show next button */
  const handleClick = (id, index) => {
      dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }))
      setShowNextBtn(true)
      setDisableClick(true)
  }

  /**
   * Function for handling clicking on next button
   * Enable answer buttons and hide next button when next button clicked
   */
  const handleNext = () => {
    dispatch(quiz.actions.goToNextQuestion())
    setShowNextBtn(false)
    setDisableClick(false)
  } 

  if (!question) {
    return <h1>Oh no! I could not find the answers of the current question!!</h1>;
  }

  return (
    <>
      <div className="answer-list">
          {!isQuizOver && question.options.map((value, index) => (
              <button key={index} type="button" onClick={() => {
                if(!disableClick) {
                  handleClick(question.id, index) 
                }
              }}>
                  <Answer value={value}/>
              </button>
          ))}
      </div>
      {showNextBtn && <NextButton handleNext={handleNext}/>}
    </>
  );
};
