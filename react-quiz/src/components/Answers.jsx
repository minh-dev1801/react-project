const Answers = ({ answers, onChooseAnswer }) => {
  return (
    <ul className="flex flex-col gap-2">
      {answers.map((answer) => (
        <li key={answer} className="w-[90%] m-auto">
          <button
            className="w-full py-3 px-8 bg-custom-bg-answer rounded-3xl text-sm text-black cursor-pointer transition-colors duration-200 ease-in-out hover:text-white hover:bg-custom-hover-bg-answer"
            aria-label={`Answer: ${answer}`}
            onClick={() => onChooseAnswer(answer)}
          >
            {answer}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Answers;
