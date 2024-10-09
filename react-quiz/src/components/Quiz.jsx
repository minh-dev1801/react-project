import { useState } from "react";
import quesions from "../data/questions";
import Summary from "./Summary";
import Question from "./Question";

const Quiz = () => {
  const [userAnswer, setUserAnswer] = useState([]);
  const index = userAnswer.length;
  const isComplete = userAnswer.length === quesions.length;
  if (isComplete) {
    return <Summary userAnswer={userAnswer} />;
  }
  return (
    <div className="bg-custom-quiz p-8 w-[50rem] m-auto rounded-md shadow-custom-quiz text-center">
      <Question index={index} userAnswer={userAnswer} />
    </div>
  );
};

export default Quiz;
