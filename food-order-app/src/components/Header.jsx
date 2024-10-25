import loginImg from "../assets/logo.jpg";

const Header = () => {
  return (
    <header className="flex flex-row justify-between w-4/5 mx-auto py-8">
      <div className="flex flex-row items-center gap-4">
        <img
          className="w-[3rem] h-[3rem] rounded-full border-[#ffc404]"
          src={loginImg}
          alt="A restaurant"
        />
        <h1 className="uppercase text-[#ffc404] text-2xl">ReactFood</h1>
      </div>
      <nav>
        <button>Cart (0)</button>
      </nav>
    </header>
  );
};

export default Header;
