import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { quiz } from '../reducers/quiz';

export const StartOver = () => {
    const isQuizOver = useSelector(
        (state) => state.quiz.quizOver
    );

    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(quiz.actions.restart())
    }

    return (
        <>
            {isQuizOver && (
                <>
                <button type="button" onClick={() => {handleClick()}}>Quiz over! Start again</button>
                </>
            )}
        </>
    );
};
