import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Init from "./Views/Init";

function App() {
  return (
    <div>
      <BrowserRouter pathname={window.location.pathname || ""}>
        <Switch>
          <Route exact path="/">
            <Init></Init>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
