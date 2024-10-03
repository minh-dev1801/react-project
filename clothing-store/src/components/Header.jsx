import ModalCart from "./ModalCart";
import { useEffect, useRef, useState } from "react";
import { updateCartItemQuantity } from "../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const modal = useRef();

  const handleUpdateCartItemQuantity = (id, number) => {
    dispatch(updateCartItemQuantity({ id: id, number: number }));
  };

  const handleOpenModalCart = () => {
    modal.current.open();
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <ModalCart
        ref={modal}
        cartItems={cart.items}
        cartTotal={cart.total}
        title="your cart"
        onUpdateCartItemQuantity={handleUpdateCartItemQuantity}
      />
      <header
        className={`px-[5%] py-3 fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-orange-800 shadow-md" : "bg-transparent"
        }`}
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src="logo.png" alt="Logo shop" className="w-20 mr-6" />
            <h1 className="uppercase text-brand text-[2.5rem]">
              Clothing shop
            </h1>
          </div>
          <Button onClick={handleOpenModalCart}>
            Cart ({cart.items.length})
          </Button>
        </div>
      </header>
    </>
  );
};

export default Header;
