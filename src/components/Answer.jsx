/* Component to display answers */

import React from "react";
import '../styles/Answer.css';

export const Answer = ( {value} ) => {
  return (
    <span className="answer">
        {value}
    </span>
  );
};
