import React from "react";
import { Link } from "react-router-dom";
import Style from "./Style.module.css";

export default function Level() {
  return (
    <div className={Style.container}>
      <Link to={{
          pathname:"/game",
          state:{level:1}
      }}>
        <button className={Style.button}>Easy</button>
      </Link>
      <Link to={{
          pathname:"/game",
          state:{level:2}
      }}>
        <button className={Style.button}>Mediun</button>
      </Link>
      <Link to={{
          pathname:"/game",
          state:{level:3}
      }}>
        <button className={Style.button}>Hard</button>
      </Link>
    </div>
  );
}
