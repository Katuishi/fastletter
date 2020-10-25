import React from "react";
// import Style from "./Style.module.css";

export default function Score({ position, username, points }) {
  return (
    <div loading="lazy">
      <div>{position}</div>
      <div>{username}</div>
      <div>{points}</div>
    </div>
  );
}
