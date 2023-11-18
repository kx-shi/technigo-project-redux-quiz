import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { quiz } from './reducers/quiz';
import { StartOver } from './components/StartOver';
import { CurrentAnswers } from "./components/CurrentAnswers";
import { SelectedAnswer } from "./components/SelectedAnswer";
import { CurrentQuestion } from './components/CurrentQuestion';

const reducer = combineReducers({
  quiz: quiz.reducer
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <CurrentQuestion />
      <CurrentAnswers />
      <SelectedAnswer />
      <StartOver />
    </Provider>
  );
}
