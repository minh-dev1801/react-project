import questions from "../data/questions";

const calculateAnswerPercentage = (userAnswerArray, type) => {
  const totalQuestions = questions.length;
  switch (type) {
    case "skipped":
      return (
        (userAnswerArray.filter((userAnswer) => userAnswer === null).length /
          totalQuestions) *
        100
      );

    case "correct":
      return (
        (userAnswerArray.filter(
          (userAnswer, index) => userAnswer === questions[index].answers[0]
        ).length /
          totalQuestions) *
        100
      );

    default:
      return 0;
  }
};

export default calculateAnswerPercentage;
