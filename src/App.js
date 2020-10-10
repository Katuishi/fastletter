import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Level from "./Views/Level";
import GameLayout from "./Views/Game";
import Init from "./Views/Init";
import { ApolloProvider } from "@apollo/client";
import { client } from "./Graphql/Client";
import { GameProvider } from "./Context/GameContext";

function App() {
  return (
    <div>
      <ApolloProvider client={client}>
        <GameProvider>
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
        </GameProvider>
       
      </ApolloProvider>
    </div>
  );
}

export default App;
