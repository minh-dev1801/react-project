import PropTypes from "prop-types";
import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const itemPropType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
});
const ModalCart = forwardRef(
  ({ productCart, title, onDecreaseQuantity, onIncreaseQuantity }, ref) => {
    const dialog = useRef();
    const numberProduct = productCart.items.length;
    const items = productCart.items;
    const totalPrice = items.reduce((sum, item) => sum + item.price, 0);

    useImperativeHandle(ref, () => {
      return {
        open: () => {
          dialog.current.showModal();
        },
      };
    });
    let actions;
    if (numberProduct > 0) {
      actions = (
        <div>
          <button className="mr-4 text-xl">Close</button>
          <button className="px-4 py-1 bg-[#382e1b] rounded-md text-white">
            Checkout
          </button>
        </div>
      );
    } else {
      actions = (
        <button className="px-4 py-1 bg-[#382e1b] rounded-md text-white">
          Close
        </button>
      );
    }
    return createPortal(
      <dialog ref={dialog} className="p-4 bg-sub-3-brand w-[40%]">
        <h1 className="uppercase text-xl text-text-brown mb-2">{title}</h1>
        {numberProduct === 0 && <span>No items in cart!</span>}
        {numberProduct > 0 && (
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                <div className="flex justify-between bg-[#fbd392] px-4 py-2 rounded-md">
                  <p>
                    {item.name} (${item.price.toFixed(2)})
                  </p>
                  <div className="flex gap-4">
                    <button
                      className="px-2"
                      onClick={() => onDecreaseQuantity(item.id)}
                    >
                      -
                    </button>
                    <span>{item.count}</span>
                    <button
                      className="px-2"
                      onClick={() => onIncreaseQuantity(item.id)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
        <div className="flex justify-end mb-2 mt-4">
          <div>
            <span>Cart Total:</span>{" "}
            <span className="font-semibold">${totalPrice.toFixed(2)}</span>
          </div>
        </div>
        <form method="dialog">
          <div className="flex justify-end">{actions}</div>
        </form>
      </dialog>,
      document.getElementById("modal")
    );
  }
);

ModalCart.displayName = "ModalCart";

ModalCart.propTypes = {
  productCart: PropTypes.shape({
    items: PropTypes.arrayOf(itemPropType).isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
  onIncreaseQuantity: PropTypes.func.isRequired,
  onDecreaseQuantity: PropTypes.func.isRequired,
};

export default ModalCart;
