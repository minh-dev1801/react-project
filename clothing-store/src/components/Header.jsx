import ModalCart from "./ModalCart";
import { useRef } from "react";
import { updateCartItemQuantity } from "../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const modal = useRef();

  const handleUpdateCartItemQuantity = (id, number) => {
    dispatch(updateCartItemQuantity({ id: id, number: number }));
  };
  const handleOpenModalCart = () => {
    modal.current.open();
  };

  return (
    <>
      <ModalCart
        ref={modal}
        cartItems={cart.items}
        cartTotal={cart.total}
        title="your cart"
        onUpdateCartItemQuantity={handleUpdateCartItemQuantity}
      />
      <header className="flex justify-between items-center pt-12 px-[15%]">
        <div className="flex items-center">
          <img src="logo.png" alt="Logo shop" className="w-20 mr-6" />
          <h1 className="uppercase text-brand text-[2.5rem]">Clothing shop</h1>
        </div>
        <button
          onClick={handleOpenModalCart}
          className="px-6 py-2 text-stone-950 bg-brand rounded-md text-xl"
        >
          Cart ({cart.items.length})
        </button>
      </header>
    </>
  );
};

export default Header;
