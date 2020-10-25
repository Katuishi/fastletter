import React from "react";
import { Link } from "react-router-dom";
// import Style from "./Style.module.css";
export default function Dashboard() {
  return (
    <div>
      <section>
        <h1>FastLetter</h1>
        <Link to="/level">
          <button>Start Game</button>
        </Link>
        <div></div>
        <Link to="/scoreboard">
          <button>Scoreboard</button>
        </Link>
      </section>
    </div>
  );
}
