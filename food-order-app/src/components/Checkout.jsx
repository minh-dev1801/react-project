import { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/formatting";
import Input from "./UI/Input";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressContext";
import useHttp from "../hooks/useHttp";
import Error from "./Error";

const requestConfig = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

const Checkout = () => {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const {
    data,
    isLoading: isSending,
    error,
    sendRequest,
    clearData,
  } = useHttp("http://localhost:5000/orders", requestConfig);

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0,
  );

  const handleClose = () => {
    userProgressCtx.hideCheckout();
  };

  const handleFinish = () => {
    userProgressCtx.hideCheckout();
    cartCtx.clearCart();
    clearData();
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const fd = new FormData(event.target);
    const customerData = Object.fromEntries(fd.entries());

    sendRequest(
      JSON.stringify({
        order: {
          items: cartCtx.items,
          customer: customerData,
        },
      }),
    );
  };

  let actions = (
    <>
      <Button
        type="button"
        textOnly
        onClick={handleClose}
        className="text-sm text-[#1d1a16]"
      >
        Close
      </Button>
      <Button type="submit">Submit Order</Button>
    </>
  );

  if (isSending) {
    actions = <span>Sending order data...</span>;
  }

  if (data && !error) {
    return (
      <Modal
        open={userProgressCtx.progress === "checkout"}
        onClose={handleFinish}
      >
        <h2 className="mb-4 text-xl font-bold">Success!</h2>
        <p className="mb-2">Your order was submitted successfully.</p>
        <p>
          We will get back to you with more details via email the next few
          minutes.
        </p>
        <p className="flex justify-end gap-4">
          <Button onClick={handleFinish}>Okay</Button>
        </p>
      </Modal>
    );
  }

  return (
    <Modal open={userProgressCtx.progress === "checkout"} onClose={handleClose}>
      <form onSubmit={handleSubmit}>
        <h2 className="mb-4 text-xl font-bold">Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>

        <Input id="name" type="text" label="Full Name" required />
        <Input id="email" type="email" label="E-Mail Address" required />
        <Input id="street" type="text" label="Street" required />

        <div className="flex justify-start gap-4">
          <Input id="postal-code" type="text" label="Post Code" required />
          <Input id="city" type="text" label="City" required />
        </div>

        {error && <Error title="Failed to submit order" message={error} />}

        <div className="flex justify-end gap-4">{actions}</div>
      </form>
    </Modal>
  );
};

export default Checkout;
