//src/App.tsx
import * as React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Calculator from './modules/calculator'

export const App = (): JSX.Element => {
  return (
    <div>
      <Router>
        <Route exact={true} path="/" component={Calculator} />
      </Router>
    </div>
  );
};
export default App;