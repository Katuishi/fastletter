import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GameContext } from "../../Context/GameContext";
import Style from "./Style.module.css";

export default function Level() {

  let { setLevel } = useContext(GameContext)
  return (
    <div className={Style.container}>
      <Link to="/game">
        <button onClick={()=> setLevel(1)} className={Style.button}>Easy</button>
      </Link>
      <Link to="/game">
        <button onClick={()=>setLevel(2)} className={Style.button}>Mediun</button>
      </Link>
      <Link to="/game">
        <button onClick={()=>setLevel(3)} className={Style.button}>Hard</button>
      </Link>
    </div>
  );
}
