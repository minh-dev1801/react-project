import PropTypes from "prop-types";
import { currencyFormatter } from "../util/formatting";

const CartItem = ({ name, quantity, price, onIncrease, onDecrease }) => {
  return (
    <li className="my-2 flex items-center justify-between">
      <p>
        {name} - {quantity} x {currencyFormatter.format(price)}
      </p>
      <p className="flex items-center gap-3">
        <button
          className="flex h-6 w-6 items-center justify-center rounded-full bg-[#312c1d] text-[#ffc404] transition-colors hover:bg-[#1a170e]"
          onClick={onDecrease}
        >
          -
        </button>
        <span className="text-lg">{quantity}</span>
        <button
          className="flex h-6 w-6 items-center justify-center rounded-full bg-[#312c1d] text-[#ffc404] transition-colors hover:bg-[#1a170e]"
          onClick={onIncrease}
        >
          +
        </button>
      </p>
    </li>
  );
};

CartItem.propTypes = {
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.string.isRequired,
  onIncrease: PropTypes.func.isRequired,
  onDecrease: PropTypes.func.isRequired,
};

export default CartItem;
