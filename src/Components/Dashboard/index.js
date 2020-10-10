import React from "react";
import { Link } from "react-router-dom";
import Style from "./Style.module.css";
export default function Dashboard() {
  return (
    <div className={Style.container}>
      <section className={Style.box}>
        <h1>FastLetter</h1>
        <Link to="/level">
          <button className={Style.button}>Start Game</button>
        </Link>
        <div className={Style.spacebar}></div>
        <Link to="/scorebank">
          <button className={Style.button}>Scorebank</button>
        </Link>
      </section>
    </div>
  );
}
