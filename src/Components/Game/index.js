import { useMutation } from "@apollo/client";
import React, { useState, useEffect, useContext } from "react";
import { GameContext } from "../../Context/GameContext";
import { ADD_SCORE } from "../../Graphql/Query";
import useEventListener from "../../Hooks/useEventListener";
import useTime from "../../Hooks/useTime";
import { gameSetting } from "../../Setting/GameSetting";
import Style from "./Style.module.css";

function SubmitScore({ score, level , setSubmit}) {
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
    setSubmit(false)
  };

  const onClick = (e)=>{
    e.preventDefault()
    setSubmit(false)
  }

  return (
    <div>
      <section>
        <form onSubmit={(e) => onSubmit(e)}>
          <h1 className={Style.title}>Score:{score}</h1>
          <input
            required
            onChange={(e) => setUserName(e.target.value)}
            value={username}
          />
          <button type="submit">Submit</button>
          <button onClick={onClick} type="button">Cancel</button>
        </form>

      </section>
    </div>
  );
}

export default function Game() {
  const { level } = useContext(GameContext);
  const [letter, setLetter] = useState();
  const [score, setScore] = useState(0);
  const [countLetterShow, setCountLetterShow] = useState(0);
  const [submit, setSubmit] = useState(false);
  const { time, timeover, resetTime } = useTime(gameSetting[level].time);

  useEffect(() => {
    selectLetter();
  }, [countLetterShow]);

  const resetGame = () => {
    resetTime();
    setScore(0);
    setCountLetterShow(0);
  };

  const selectLetter = () => {
    let data = "abcdefghijklmnoprqstuvwxzy";
    setLetter(data[Math.floor(Math.random() * data.length)]);
  };

  const onKeyUp = (e) => {
    if (!timeover) {
      if (e.key.toLowerCase() === letter) {
        setScore(score + 1);
      }
      setCountLetterShow(countLetterShow + 1);
    }
  };

  useEventListener("keyup", onKeyUp);

  return (
    <div className={Style.container}>
      <div className={Style.box}>
        {submit ? (
          <SubmitScore setSubmit={setSubmit} level={level} score={score}></SubmitScore>
        ) : null}
        {timeover || submit ? (
          <>
            <p
              className={Style.title}
            >{`Time over  ${score} / ${countLetterShow}`}</p>
            <button className={Style.button} onClick={resetGame}>
              RESET
            </button>
            <button className={Style.button} onClick={() => setSubmit(true)}>
              Submit your Score
            </button>
          </>
        ) : (
          <>
            <p className={Style.title}>Score:{score}</p>
            <p className={Style.title}>Time:{time}</p>
            <p className={Style.letter}>{letter}</p>
          </>
        )}
      </div>
    </div>
  );
}
