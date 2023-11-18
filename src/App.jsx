// React / Redux imports
import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { quiz } from './reducers/quiz';

// Components imports
import { StartOver } from './components/StartOver';
import { CurrentAnswers } from "./components/CurrentAnswers";
import { SelectedAnswer } from "./components/SelectedAnswer";
import { CurrentQuestion } from './components/CurrentQuestion';
import { ProgressBar } from './components/ProgressBar';
import { Summary } from './components/Summary';

// Styling imports
import './index.css';

const reducer = combineReducers({
  quiz: quiz.reducer
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <ProgressBar />
      <CurrentQuestion />
      <CurrentAnswers />
      <SelectedAnswer />
      <Summary />
      <StartOver />
    </Provider>
  );
}
