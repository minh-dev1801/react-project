import quizLogo from "../assets/quiz-complete.png";
import calculateAnswerPercentage from "../utils/calculateAnswerPercentage";
import questions from "../data/questions";
const ONE_HUNDRED_PERCENT = 100;

const Summary = ({ userAnswers }) => {
  const skippedAnswerPercentage = calculateAnswerPercentage(
    userAnswers,
    "skipped"
  );
  const correctAnswerPercentage = calculateAnswerPercentage(
    userAnswers,
    "correct"
  );
  const incorrectAnswerPercentage =
    ONE_HUNDRED_PERCENT - skippedAnswerPercentage - correctAnswerPercentage;

  return (
    <div className="w-[40%] mx-auto my-8 p-8 bg-custom-summary shadow-custom-summary rounded-lg text-custom-text-summary-content text-center">
      <img
        src={quizLogo}
        alt="Quiz Logo"
        className="w-32 h-32 mx-auto mb-4 bg-[#c18cfa] rounded-full border-2 border-[#3a2353] drop-shadow-custom-summary p-4"
      />
      <h2 className="uppercase font-roboto-condensed text-5xl text-custom-text-summary font-bold">
        Quiz Completed!
      </h2>
      <div className="border-b-2 border-[#594276] flex w-[60%] my-8 mx-auto pb-8 gap-12">
        <p className="flex flex-col">
          <span className="font-roboto-condensed text-[#594276] text-5xl">
            {skippedAnswerPercentage}%
          </span>
          <span className="uppercase font-roboto-condensed text-[#30273a] text-sm tracking-[0.1rem] mt-2 mr-3">
            skipped
          </span>
        </p>
        <p className="flex flex-col">
          <span className="font-roboto-condensed text-[#594276] text-5xl">
            {correctAnswerPercentage}%
          </span>
          <span className="uppercase font-roboto-condensed text-[#30273a] text-sm tracking-[0.1rem] mt-2">
            answered correctly
          </span>
        </p>
        <p className="flex flex-col">
          <span className="font-roboto-condensed text-[#594276] text-5xl">
            {incorrectAnswerPercentage}%
          </span>
          <span className="uppercase font-roboto-condensed text-[#30273a] text-sm tracking-[0.1rem] mt-2">
            answered incorrectly
          </span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
          let cssAnswer = "my-1 font-bold";
          if (answer === null) {
            cssAnswer += " text-[#d1baf2]";
          } else if (answer === questions[index].answers[0]) {
            cssAnswer += " text-[#054e37]";
          } else {
            cssAnswer += " text-[#730b4b]";
          }
          return (
            <li key={questions[index].id} className="my-8">
              <h3 className="font-roboto-condensed rounded-full bg-[#2c203d] w-8 h-8 text-[#d8cde8] flex justify-center items-center text-lg mx-auto">
                {index + 1}
              </h3>
              <p className="my-1 text-lg">{questions[index].text}</p>
              <p className={cssAnswer}>
                {answer !== null ? answer : "Skipped"}
              </p>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Summary;
