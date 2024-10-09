import Timer from "./Timer";
import quesions from "../data/questions";
import Answers from "./Answers";
import { useState } from "react";

const Question = ({ index, userAnswer, onChooseAnswer }) => {
  const [answer, setAnswer] = useState({
    content: "",
    isCorreact: null,
  });
  const handleChooseAnswer = (selectedAnswer) => {
    setAnswer({ content: selectedAnswer, isCorreact: null });
    onChooseAnswer(selectedAnswer);
  };
  return (
    <>
      <Timer />
      <h2 className="mt-2 mb-10 text-2xl text-custom-text-answer font-roboto-condensed">
        {quesions[index].text}
      </h2>
      <Answers
        answers={quesions[index].answers}
        onChooseAnswer={handleChooseAnswer}
      />
    </>
  );
};

export default Question;
