import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GameContext } from "../../Context/GameContext";
// import Style from "./Style.module.css";

export default function Level() {
  let { setLevel } = useContext(GameContext);
  return (
    <div>
      <Link to="/game">
        <button onClick={() => setLevel("easy")}>Easy</button>
      </Link>
      <Link to="/game">
        <button onClick={() => setLevel("mediun")}>Mediun</button>
      </Link>
      <Link to="/game">
        <button onClick={() => setLevel("hard")}>Hard</button>
      </Link>
    </div>
  );
}
