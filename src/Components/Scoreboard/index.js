import { useMutation, useQuery } from "@apollo/client";
import React, { useState } from "react";
import { ALL_SCORE } from "../../Graphql/Query";

function ListScores({ diffcult }) {
  
  const { data, error, loading } = useQuery(ALL_SCORE);

  if (error) return <div>error</div>;
  if (loading) return <div>loading</div>;
  return data.map((x) => (
    <div>
      <div>x.position</div>
      <div>x.username</div>
      <div>x.score</div>
    </div>
  ));
}

export function Scoreboard() {
  const [difficult, setDifficult] = useState(1);

  return (
    <div className="scoreboard">
      <div className="scoreboard-header">
        <button onClick={() => setDifficult(1)}>EASY</button>
        <button onClick={() => setDifficult(2)}>MEDIUN</button>
        <button onClick={() => setDifficult(3)}>HARD</button>
      </div>
      <div className="scoreboard-body"></div>
    </div>
  );
}
