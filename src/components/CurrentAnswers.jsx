import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { quiz } from "../reducers/quiz";
import { Answer } from "./Answer";

export const CurrentAnswers = () => {
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );

  const dispatch = useDispatch()
  const handleClick = (id, index) => {
      dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }))
  }

  if (!question) {
    return <h1>Oh no! I could not find the answers of the current question!!</h1>;
  }

  let qID = question.id;

  return (
    <div>
        {question.options.map((value, index) => (
            <button key={index} type="button" onClick={() => {
                handleClick(qID, index)}}>
                <Answer value={value}/>
            </button>
        ))}
    </div>
  );
};
