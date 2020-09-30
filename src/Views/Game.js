import React from "react";
import { Game } from "../Components";
import { useLocation } from "react-router-dom";

export default function GameLayout() {
  const { state } = useLocation();

  return (
    <>
      <Game level={state.level?state.level:3}></Game>
    </>
  );
}
