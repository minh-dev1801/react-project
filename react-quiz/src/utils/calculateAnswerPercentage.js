import questions from "../data/questions";
import { ONE_HUNDRED_PERCENT } from "./constants";

const calculateAnswerPercentage = (userAnswerArray, type) => {
  const totalQuestions = questions.length;
  if (totalQuestions === 0) return 0;
  let count;
  switch (type) {
    case "skipped":
      count = userAnswerArray.filter(
        (userAnswer) => userAnswer === null
      ).length;
      break;
    case "correct":
      count = userAnswerArray.filter(
        (userAnswer, index) => userAnswer === questions[index].answers[0]
      ).length;
      break;
    default:
      return 0;
  }
  const percentage = Math.round((count / totalQuestions) * ONE_HUNDRED_PERCENT);
  return percentage;
};

export default calculateAnswerPercentage;
