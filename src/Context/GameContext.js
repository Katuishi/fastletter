import React, { useState } from "react";

const GameContext = React.createContext({});

const { Provider } = GameContext;

function GameProvider(props) {
  const [username, setUserName] = useState("");
  const [level, setLevel] = useState("easy");
  const [score, setScore] = useState(0);

  return (
    <Provider value={{username, level, score, setScore, setUserName, setLevel}}>
      {props.children}
    </Provider>
  );
}

export { GameProvider, GameContext };
