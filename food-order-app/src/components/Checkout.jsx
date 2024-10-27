import { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/formatting";
import Input from "./UI/Input";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressContext";

const Checkout = () => {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0,
  );

  const handleClose = () => {
    userProgressCtx.hideCheckout();
  };

  return (
    <Modal open={userProgressCtx.progress === "checkout"}>
      <form action="">
        <h2 className="mb-4 text-xl font-bold">Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>

        <Input id="full-name" type="text" label="Full Name" required />
        <Input id="email" type="email" label="E-Mail Address" required />
        <Input id="street" type="text" label="Street" required />
        <div className="flex justify-start gap-4">
          <Input id="postal-code" type="text" label="Post Code" required />
          <Input id="city" type="text" label="City" required />
        </div>
        <div className="flex justify-end gap-4">
          <Button
            type="button"
            textOnly
            onClick={handleClose}
            className="text-sm text-[#1d1a16]"
          >
            Close
          </Button>
          <Button type="submit">Submit Order</Button>
        </div>
      </form>
    </Modal>
  );
};

export default Checkout;
