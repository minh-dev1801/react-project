import questions from "../data/questions";
import { ONE_HUNDRED_PERCENT } from "./constants";

const calculateAnswerPercentage = (userAnswerArray, type) => {
  const totalQuestions = questions.length;
  switch (type) {
    case "skipped":
      return (
        (userAnswerArray.filter((userAnswer) => userAnswer === null).length /
          totalQuestions) *
        ONE_HUNDRED_PERCENT
      );

    case "correct":
      return (
        (userAnswerArray.filter(
          (userAnswer, index) => userAnswer === questions[index].answers[0]
        ).length /
          totalQuestions) *
        ONE_HUNDRED_PERCENT
      );

    default:
      return 0;
  }
};

export default calculateAnswerPercentage;
