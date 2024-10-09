import quizLogo from "../assets/quiz-logo.png";
const Header = () => {
  return (
    <header className="text-center my-8 mx-0">
      <img
        src={quizLogo}
        alt="quiz Logo"
        className="w-12 h-12 mx-auto drop-shadow-custom"
      />
      <h1 className="uppercase bg-custom-gradient bg-clip-text text-transparent font-bold text-[2.5rem] font-roboto-condensed tracking-[0.6rem]">
        ReactQuiz
      </h1>
    </header>
  );
};

export default Header;
