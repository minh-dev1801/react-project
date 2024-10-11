import { useEffect, useRef, useState } from "react";
import { HUNDRED_MILLISECONDS } from "../utils/constants";
import PropTypes from "prop-types";

const Timer = ({ answer, onChooseAnswer, indexAnswer }) => {
  const { isCorrect, isCheck, time, content } = answer;
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
  }, [isCorrect, isCheck, time, indexAnswer]);

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
  }, [isCorrect, isCheck, time, indexAnswer]);

  useEffect(() => {
    if (remainingTime === 0 && content === "") {
      onChooseAnswer(null);
    }
  }, [remainingTime, content, onChooseAnswer]);

  return (
    <>
      <progress
        value={remainingTime}
        max={progress.maxValue}
        className={`custom-progress ${progress.active}`}
      />
    </>
  );
};

Timer.propTypes = {
  answer: PropTypes.shape({
    content: PropTypes.string,
    isCorrect: PropTypes.bool,
    isCheck: PropTypes.bool,
    time: PropTypes.number,
  }),
  onChooseAnswer: PropTypes.func,
  indexAnswer: PropTypes.number,
};

export default Timer;
