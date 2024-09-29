const Header = () => {
  return (
    <header className="flex justify-between items-center pt-12 px-[15%]">
      <div className="flex items-center">
        <img src="logo.png" alt="Logo shop" className="w-20 mr-6" />
        <h1 className="uppercase text-brand text-[2.5rem]">Clothing shop</h1>
      </div>
      <button className="px-6 py-2 text-stone-950 bg-brand rounded-md text-xl">Cart (0)</button>
    </header>
  );
};

export default Header;
