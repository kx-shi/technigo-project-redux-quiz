import React from "react";
import { useSelector } from "react-redux";

export const SelectedAnswer = () => {
    const selectedAnswer = useSelector(
        (state) => state.quiz.answers
    );

    if (selectedAnswer.length == 0) {
        return <span>No answer selected</span>;
    }

    return (
        <span>
            You have selected: {selectedAnswer[selectedAnswer.length-1].answer}
        </span>
    );
};
