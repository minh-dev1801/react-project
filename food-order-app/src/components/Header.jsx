import loginImg from "../assets/logo.jpg";
import Button from "./UI/Button";

const Header = () => {
  return (
    <header className="container flex flex-row justify-between">
      <div className="flex flex-row items-center gap-4">
        <img
          className="h-[3rem] w-[3rem] rounded-full border-[#ffc404]"
          src={loginImg}
          alt="A restaurant"
        />
        <h1 className="text-2xl uppercase text-[#ffc404]">ReactFood</h1>
      </div>
      <nav>
        <Button textOnly>Cart (0)</Button>
      </nav>
    </header>
  );
};

export default Header;
