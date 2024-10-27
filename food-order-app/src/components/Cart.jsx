import { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressContext";
import CartItem from "./CartItem";

const Cart = () => {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + Number(item.quantity) * item.price,
    0,
  );

  const handleCloseCart = () => {
    userProgressCtx.hideCart();
  };

  const handleGoToCheckout = () => {
    userProgressCtx.showCheckout();
  };

  return (
    <Modal open={userProgressCtx.progress === "cart"}>
      <h2 className="mb-4 text-xl font-bold">Your Cart</h2>
      <ul className="my-2">
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            onIncrease={() => cartCtx.addItem(item)}
            onDecrease={() => cartCtx.removeItem(item.id)}
          />
        ))}
      </ul>
      <p className="color-[#46443c] my-6 flex justify-end text-lg font-semibold">
        {currencyFormatter.format(cartTotal)}
      </p>

      <p className="flex justify-end gap-4">
        <Button
          textOnly
          onClick={handleCloseCart}
          className="text-sm text-[#1d1a16]"
        >
          Close
        </Button>
        {cartCtx.items.length > 0 && (
          <Button
            onClick={handleGoToCheckout}
            className="transition-colors hover:bg-[#ffb004]"
          >
            Go to Checkout
          </Button>
        )}
      </p>
    </Modal>
  );
};

export default Cart;
