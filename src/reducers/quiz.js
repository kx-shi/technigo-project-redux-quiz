import { createSlice } from "@reduxjs/toolkit";

// Change these to your own questions!
// NOTE: At least 5 questions required!
const questions = [
  {
    id: 1,
    questionText: "Which built-in method can be used to convert a string to uppercase letters in JavaScript?",
    options: ["upperCase()", "toUpperCase()", "caseUpper()", "toLowerCase()"],
    correctAnswerIndex: 1
  },
  {
    id: 2,
    questionText:
      "What is a function in JavaScript?",
    options: ["A block of code that executes only once", "A type of loop used to iterate through arrays", "A reusable block of code that can be invoked by its name to perform a specific task", "A data type to store multiple values"],
    correctAnswerIndex: 2
  },
  {
    id: 3,
    questionText:
      "What does API stand for?",
    options: ["Asynchronous Programming Interface", "Advanced Programming Integration", "Asynchronous Python Interface", "Application Programming Interface"],
    correctAnswerIndex: 3
  },
  {
    id: 4,
    questionText:
      "What is the virtual DOM in React?",
    options: ["An imaginary representation of a web page", "A server used for storing data", "A lightweight version of the actual DOM", "A way to style React components"],
    correctAnswerIndex: 2
  },
  {
    id: 5,
    questionText:
      "In React, what is state?",
    options: ["The result of a function component", "The props passed down from a parent component", "The data returned from an API", "The internal data of a component that can change over time"],
    correctAnswerIndex: 3
  },
  {
    id: 6,
    questionText:
      "In React, what is the purpose of the fetch() function when working with APIs?",
    options: ["To make HTTP requests and retrieve data from an API", "To create new components dynamically", "To handle user interactions with the API", "To fetch and update component state"],
    correctAnswerIndex: 0
  },
  {
    id: 7,
    questionText:
      "Which HTTP method is typically used for retrieving data from an API in React?",
    options: ["POST", "GET", "DELETE", "PUT"],
    correctAnswerIndex: 1
  },
  {
    id: 8,
    questionText:
      "When working with APIs, what does the term 'API endpoint' refer to?",
    options: ["A function that fetches data from an API", "The main component of a React application", "The starting point of a React application", "A specific URL that represents a unique resource in the API"],
    correctAnswerIndex: 3
  }
];

const initialState = {
  questions,
  answers: [],
  currentQuestionIndex: 0,
  quizOver: false
};

export const quiz = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    /**
     * Use this action when a user selects an answer to the question.
     * The answer will be stored in the `quiz.answers` state with the
     * following values:
     *
     *    questionId  - The id of the question being answered.
     *    answerIndex - The index of the selected answer from the question's options.
     *    question    - A copy of the entire question object, to make it easier to show
     *                  details about the question in your UI.
     *    answer      - The answer string.
     *    isCorrect   - true/false if the answer was the one which the question says is correct.
     *
     * When dispatching this action, you should pass an object as the payload with `questionId`
     * and `answerIndex` keys. See the readme for more details.
     */
    submitAnswer: (state, action) => {
      const { questionId, answerIndex } = action.payload;
      const question = state.questions.find((q) => q.id === questionId);

      if (!question) {
        throw new Error(
          `Could not find question based on questionId ${questionId}! Check to make sure you are passing the question id correctly.`
        );
      }

      if (question.options[answerIndex] === undefined) {
        throw new Error(
          `You passed answerIndex ${answerIndex}, but it is not in the possible answers array!`
        );
      }

      state.answers.push({
        questionId,
        answerIndex,
        question,
        answer: question.options[answerIndex],
        isCorrect: question.correctAnswerIndex === answerIndex
      });
    },

    /**
     * Use this action to progress the quiz to the next question. If there's
     * no more questions (the user was on the final question), set `quizOver`
     * to `true`.
     *
     * This action does not require a payload.
     */
    goToNextQuestion: (state) => {
      if (state.currentQuestionIndex + 1 === state.questions.length) {
        state.quizOver = true;
      } else {
        state.currentQuestionIndex += 1;
      }
    },

    /**
     * Use this action to reset the state to the initial state the page had
     * when it was loaded. Who doesn't like re-doing a quiz when you know the
     * answers?!
     *
     * This action does not require a payload.
     */
    restart: () => {
      return initialState;
    }
  }
});
