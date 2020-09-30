import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Level from "./Views/Level";
import GameLayout from "./Views/Game";
import Init from "./Views/Init";

function App() {
  return (
    <div>
      <BrowserRouter pathname={window.location.pathname || ""}>
        <Switch>
          <Route exact path="/">
            <Init></Init>
          </Route>
          <Route exact path="/game">
            <GameLayout></GameLayout>
          </Route>
          <Route exact path="/level">
            <Level></Level>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
