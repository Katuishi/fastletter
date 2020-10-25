import React, { useState, useEffect, useContext } from "react";
import { GameContext } from "../../Context/GameContext";
import useEventListener from "../../Hooks/useEventListener";
import useTime from "../../Hooks/useTime";
import { gameSetting } from "../../Setting/GameSetting";
import ScoreSubmit from "../ScoreSubmit";
// import Style from "./Style.module.css";


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
    <div>
      <div>
        {submit ? (
          <ScoreSubmit
            setSubmit={setSubmit}
            level={level}
            score={score}
          ></ScoreSubmit>
        ) : null}
        {timeover || submit ? (
          <>
            <p>{`Time over  ${score} / ${countLetterShow}`}</p>
            <button onClick={resetGame}>RESET</button>
            <button onClick={() => setSubmit(true)}>Submit your Score</button>
          </>
        ) : (
          <>
            <p>Score:{score}</p>
            <p>Time:{time}</p>
            <p>{letter}</p>
          </>
        )}
      </div>
    </div>
  );
}
