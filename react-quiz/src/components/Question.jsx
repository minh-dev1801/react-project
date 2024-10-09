import Timer from "./Timer";
import quesions from "../data/questions";
import Answers from "./Answers";

const Question = ({ index, userAnswer }) => {
  return (
    <>
      <Timer />
      <h2 className="mt-2 mb-10 text-2xl text-custom-text-answer font-roboto-condensed">{quesions[index].text}</h2>
      <Answers answers={quesions[index].answers} />
    </>
  );
};

export default Question;
