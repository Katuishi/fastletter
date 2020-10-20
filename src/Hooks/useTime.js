import { useEffect, useState } from "react";

export default function (seconds) {
  const [time, setTime] = useState(seconds);
  const [timeover, setTimeOver] = useState(false);

  const resetTime = () => {
    setTimeOver(false);
    setTime(seconds);
  };
  useEffect(() => {
    const watch = setTimeout(() => {
      setTime(time - 1);
    }, 1000);

    if (!time) {
      setTimeOver(true);
      clearTimeout(watch);
    }
    return () => {
      clearTimeout(watch);
    };
  }, [time]);

  return {
    time,
    timeover,
    resetTime,
  };
}
