import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { ADD_SCORE } from "../../Graphql/Query";
// import Style from "./Style.module.css";
import  Modal from "../Modal";

export default function ScoreSubmit({ score, level, setSubmit }) {
  const [username, setUserName] = useState("");
  const [addScore] = useMutation(ADD_SCORE);

  const onSubmit = (e) => {
    e.preventDefault();
    addScore({
      variables: {
        data: {
          username: username,
          points: score,
          level: level,
        },
      },
    });
    setSubmit(false);
  };

  const onClick = (e) => {
    e.preventDefault();
    setSubmit(false);
  };

  return (
    <Modal>
      <form onSubmit={(e) => onSubmit(e)}>
        <h1>Score:{score}</h1>
        <input
          required
          placeholder="type your username"
          onChange={(e) => setUserName(e.target.value)}
          value={username}
        />
        <button type="submit">Submit</button>

        <button onClick={onClick} type="button">
          Cancel
        </button>
      </form>
    </Modal>
  );
}
