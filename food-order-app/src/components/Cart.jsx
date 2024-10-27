import { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressContext";

const Cart = () => {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0,
  );

  const handleCloseCart = () => {
    userProgressCtx.hideCart();
  };

  return (
    <Modal open={userProgressCtx.progress === "cart"}>
      <h2 className="mb-4 text-xl font-bold">Your Cart</h2>
      <ul className="my-2">
        {cartCtx.items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity}
          </li>
        ))}
      </ul>
      <p className="color-[#46443c] my-8 flex justify-end text-lg font-semibold">
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
        <Button
          onClick={handleCloseCart}
          className="transition-colors hover:bg-[#ffb004]"
        >
          Go to Checkout
        </Button>
      </p>
    </Modal>
  );
};

export default Cart;
