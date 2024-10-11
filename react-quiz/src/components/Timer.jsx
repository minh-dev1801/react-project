import { useEffect, useRef, useState } from "react";
import { HUNDRED_MILLISECONDS } from "../utils/constants";

const Timer = ({ answer }) => {
  const { isCorrect, isCheck, time } = answer;
  const [remainingTime, setRemainingTime] = useState(time);
  const [progress, setProgress] = useState({
    maxValue: time,
    active: "",
  });
  const timerIdRef = useRef(null);

  useEffect(() => {
    const key = `${isCorrect}-${isCheck}`;
    switch (key) {
      case "null-null":
        setProgress({ maxValue: time, active: "" });
        setRemainingTime(time);
        break;
      case "null-true":
        setProgress({ maxValue: time, active: "active-selected" });
        setRemainingTime(time);
        break;
      case "true-false":
        setProgress({ maxValue: time, active: "active-correct" });
        setRemainingTime(time);
        break;
      case "false-false":
        setProgress({ maxValue: time, active: "active-incorrect" });
        setRemainingTime(time);
        break;

      default:
        break;
    }
  }, [isCorrect, isCheck, time]);

  useEffect(() => {
    timerIdRef.current = setInterval(() => {
      setRemainingTime((prevTime) => {
        const newTime = prevTime - HUNDRED_MILLISECONDS;
        if (newTime <= 0) {
          clearInterval(timerIdRef.current);
          return 0;
        }
        return newTime;
      });
    }, HUNDRED_MILLISECONDS);

    return () => {
      clearInterval(timerIdRef.current);
    };
  }, [isCorrect]);

  return (
    <progress
      value={remainingTime}
      max={progress.maxValue}
      className={`custom-progress ${progress.active}`}
    />
  );
};

export default Timer;
