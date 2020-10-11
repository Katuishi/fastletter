import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GameContext } from "../../Context/GameContext";
import Style from "./Style.module.css";

export default function Level() {

  let { setLevel } = useContext(GameContext)
  return (
    <div className={Style.container}>
      <Link to="/game">
        <button onClick={()=> setLevel("easy")} className={Style.button}>Easy</button>
      </Link>
      <Link to="/game">
        <button onClick={()=>setLevel("mediun")} className={Style.button}>Mediun</button>
      </Link>
      <Link to="/game">
        <button onClick={()=>setLevel("hard")} className={Style.button}>Hard</button>
      </Link>
    </div>
  );
}
