import Timer from "./Timer";
import quesions from "../data/questions";
import Answers from "./Answers";
import { useEffect, useRef, useState } from "react";
import { ONE_SECONDS, TEN_SECONDS, TWO_SECONDS } from "../utils/constants";

const Question = ({ index, userAnswer, onChooseAnswer }) => {
  const [answer, setAnswer] = useState({
    content: "",
    isCorrect: null,
    isCheck: null,
    time: TEN_SECONDS,
  });

  const timeoutIds = useRef(new Set());

  useEffect(() => {
    const currentTimeoutIds = timeoutIds.current;
    return () => {
      currentTimeoutIds.forEach((timeoutId) => clearTimeout(timeoutId));
      currentTimeoutIds.clear();
    };
  }, []);

  const setManagedTimeout = (callback, delay) => {
    const timer = setTimeout(() => {
      callback();
      timeoutIds.current.delete(timer);
    }, delay);
    timeoutIds.current.add(timer);
  };

  const handleChooseAnswer = (selectedAnswer) => {
    setAnswer((prevAnswer) => ({
      ...prevAnswer,
      content: selectedAnswer,
      isCheck: true,
      time: ONE_SECONDS,
    }));
    scheduleAnswerCheck(selectedAnswer);
  };

  const scheduleAnswerCheck = (selectedAnswer) => {
    setManagedTimeout(() => {
      const isCorrect = selectedAnswer === quesions[index].answers[0];
      setAnswer((prevAnswer) => ({
        ...prevAnswer,
        isCorrect,
        isCheck: false,
        time: TWO_SECONDS,
      }));
      scheduleAnswerFinish(selectedAnswer);
    }, ONE_SECONDS);
  };

  const scheduleAnswerFinish = (selectedAnswer) => {
    setManagedTimeout(() => {
      if (selectedAnswer !== null) {
        onChooseAnswer(selectedAnswer);
      } else {
        onChooseAnswer(null);
      }
      setAnswer({
        content: "",
        isCorrect: null,
        isCheck: null,
        time: TEN_SECONDS,
      });
    }, TWO_SECONDS);
  };

  return (
    <>
      <Timer answer={answer} />
      <h2 className="mt-2 mb-10 text-2xl text-custom-text-answer font-roboto-condensed">
        {quesions[index].text}
      </h2>
      <Answers
        answers={quesions[index].answers}
        selectedAnswer={answer.content}
        onChooseAnswer={handleChooseAnswer}
        isCorrect={answer.isCorrect}
      />
    </>
  );
};

export default Question;
