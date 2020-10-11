import React from "react";
import Style from "./Style.module.css";

export default function Score({ position, username, points }) {
  return (
    <div className={Style.container} loading="lazy">
      <div className={Style.box}>{position}</div>
      <div className={Style.box}>{username}</div>
      <div className={Style.box}>{points}</div>
    </div>
  );
}
