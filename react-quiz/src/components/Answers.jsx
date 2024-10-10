import classNames from "classnames";
import React from "react";

const Answers = ({ answers, selectedAnswer, onChooseAnswer, isCorrect }) => {
  const baseClasses =
    "w-full py-3 px-8 rounded-3xl text-sm cursor-pointer transition-colors duration-200 ease-in-out";
  const hasSelectedAnswer = !!selectedAnswer;

  return (
    <ul className="flex flex-col gap-2">
      {answers.map((answer) => {
        const isSelected = selectedAnswer === answer;

        const classes = classNames(baseClasses, {
          "bg-[#6cb7f5] text-black hover:bg-[#9d5af5] hover:text-white":
            !hasSelectedAnswer && !isSelected && isCorrect === null,
          "bg-[#f5a76c] text-[#2c203d]":
            isSelected && hasSelectedAnswer && isCorrect === null,
          "bg-[#5af59d] text-[#2c203d]":
            isSelected && hasSelectedAnswer && isCorrect === true,
          "bg-[#f55a98] text-[#2c203d]":
            hasSelectedAnswer && isSelected && isCorrect === false,
          "opacity-50 bg-[#6cb7f5] text-black":
            !isSelected && hasSelectedAnswer,
        });

        return (
          <li key={answer} className="w-[90%] m-auto">
            <button
              className={classes}
              aria-label={`Answer: ${answer}`}
              onClick={() => onChooseAnswer(answer)}
              disabled={hasSelectedAnswer}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Answers;
