import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { ALL_SCORE } from "../../Graphql/Query";
import Score from "../Score";
import Style from "./Style.module.css";

function ListScores({ level }) {
  const { data, error, loading } = useQuery(ALL_SCORE,{variables:{
    level:level
  }});

  if (error) return <div>error</div>;
  if (loading) return <div>loading</div>;
  console.log(data);
  return data.Scores.map((x, index) => (
    <Score position={index + 1} username={x.username} points={x.points}></Score>
  ));
}

export default function Scoreboard() {
  const [level, setLevel] = useState("easy");

  return (
    <div className={Style.scoreboard}>
      <div className={Style.scoreboard_header}>
        <button
          className={level === "easy" ? Style.offbox : Style.onbox}
          onClick={() => setLevel("easy")}
        >
          EASY
        </button>
        <button
          className={level === "mediun" ? Style.offbox : Style.onbox}
          onClick={() => setLevel("mediun")}
        >
          MEDIUN
        </button>
        <button
          className={level === "hard" ? Style.offbox : Style.onbox}
          onClick={() => setLevel("hard")}
        >
          HARD
        </button>
      </div>
      <div className={Style.scoreboard_body}>
        <ListScores level={level} />
      </div>
    </div>
  );
}
