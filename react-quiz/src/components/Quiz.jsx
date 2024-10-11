import { useCallback, useState } from "react";
import quesions from "../data/questions";
import Summary from "./Summary";
import Question from "./Question";

const Quiz = () => {
  const [userAnswer, setUserAnswer] = useState([]);

  const index = userAnswer.length;
  const isComplete = userAnswer.length === quesions.length;

  const handleChooseAnswer = useCallback((selectedAnswer) => {
    setUserAnswer((preUserAnswer) => [...preUserAnswer, selectedAnswer]);
  }, []);

  if (isComplete) {
    return <Summary userAnswers={userAnswer} />;
  }

  return (
    <div className="bg-custom-quiz p-8 w-[50%] m-auto rounded-md shadow-custom-quiz text-center">
      <Question index={index} onChooseAnswer={handleChooseAnswer} />
    </div>
  );
};

export default Quiz;
