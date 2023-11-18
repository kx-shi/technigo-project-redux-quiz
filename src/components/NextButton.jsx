/* Copmonent to display next-button */

import React from "react";
import '../styles/NextButton.css';

export const NextButton = ({handleNext}) => {
  return (
    <div className="next-btn-container">
      <button
        type="button"
        className="next-btn"
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
};
