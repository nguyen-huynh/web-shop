//src/App.tsx
import React from "react";
import {
  BrowserRouter,
  useRoutes
} from 'react-router-dom';
import {CalculatorRouter} from './modules/calculator'

export const App = (): JSX.Element => {
  // We removed the <BrowserRouter> element from App because the
  // useRoutes hook needs to be in the context of a <BrowserRouter>
  // element. This is a common pattern with React Router apps that
  // are rendered in different environments. To render an <App>,
  // you'll need to wrap it in your own <BrowserRouter> element.
  let element = useRoutes([
    CalculatorRouter
  ])

  return element;
};

export default App;