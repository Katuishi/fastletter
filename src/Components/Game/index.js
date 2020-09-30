import React, { useState, useEffect } from "react";
import useEventListener from "../../Hooks/useEventListener";
import useTime from "../../Hooks/useTime";
import Style from "./Style.module.css";

export default function Game({ level }) {
  const settingLevel = {
    1: {
      time: 30,
    },
    2: {
      time: 45,
    },
    3: {
      time: 60,
    },
  };
  const [letter, setLetter] = useState();
  const [score, setScore] = useState(0);
  const [countLetterShow, setCountLetterShow] = useState(0);
  const { time, timeover, resetTime } = useTime(settingLevel[level].time);

  const resetGame = () => {
    resetTime();
    setScore(0);
    setCountLetterShow(0);
  };

  const selectLetter = () => {
    let data = "abcdefghijklmnoprqstuvwxzy";
    setLetter(data[Math.floor(Math.random() * data.length)]);
  };

  useEffect(() => {
    selectLetter();
  }, [countLetterShow]);

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
        {timeover ? (
          <>
            <p
              className={Style.title}
            >{`Time over  ${score} / ${countLetterShow}`}</p>
            <button className={Style.button} onClick={resetGame}>
              RESET
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
