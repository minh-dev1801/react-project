import Timer from "./Timer";
import quesions from "../data/questions";
import Answers from "./Answers";
import { useEffect, useRef, useState } from "react";
import {
  TIME_OF_CHECK_CORRECT_ANSWER,
  TIME_OF_FINISH_ANSWER,
} from "../utils/constants";

const Question = ({ index, userAnswer, onChooseAnswer }) => {
  const [answer, setAnswer] = useState({
    content: "",
    isCorrect: null,
  });
  const timeoutIds = useRef([]);

  useEffect(() => {
    return () => {
      console.log("Zo clear timeout!!!");

      timeoutIds.current.forEach((timeoutId) => clearTimeout(timeoutId));
    };
  }, []);

  const handleChooseAnswer = (selectedAnswer) => {
    setAnswer({ content: selectedAnswer, isCorrect: null });
    scheduleAnswerCheck(selectedAnswer);
  };

  const scheduleAnswerCheck = (selectedAnswer) => {
    const timeoutId = setTimeout(() => {
      const isCorrect = selectedAnswer === quesions[index].answers[0];
      setAnswer({
        content: selectedAnswer,
        isCorrect,
      });
      scheduleAnswerFinish(selectedAnswer);
    }, TIME_OF_CHECK_CORRECT_ANSWER);

    timeoutIds.current = [...timeoutIds.current, timeoutId];
  };

  const scheduleAnswerFinish = (selectedAnswer) => {
    const timeoutId = setTimeout(() => {
      onChooseAnswer(selectedAnswer);
      setAnswer({
        content: "",
        isCorrect: null,
      });
    }, TIME_OF_FINISH_ANSWER);

    timeoutIds.current = [...timeoutIds.current, timeoutId];
  };

  return (
    <>
      <Timer />
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
