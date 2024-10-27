import { useContext } from "react";
import loginImg from "../assets/logo.jpg";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";

const Header = () => {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

  const handleShowCart = () => {
    userProgressCtx.showCart();
  };

  return (
    <header className="cus-conten flex flex-row justify-between">
      <div className="flex flex-row items-center gap-3">
        <img
          className="h-[3rem] w-[3rem] rounded-full border-2 border-[#ffc404]"
          src={loginImg}
          alt="A restaurant"
        />
        <h1 className="text-2xl uppercase text-[#ffc404]">ReactFood</h1>
      </div>
      <nav>
        <Button textOnly onClick={handleShowCart} className="text-xl">
          Cart ({totalCartItems})
        </Button>
      </nav>
    </header>
  );
};

export default Header;
