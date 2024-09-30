import PropTypes from "prop-types";
import ModalCart from "./ModalCart";
import { useRef } from "react";

const itemPropType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
});

const Header = ({ productCart, onDecreaseQuantity, onIncreaseQuantity }) => {
  const numberItems = productCart.items.length;
  const modal = useRef();
  const handleOpenModalCart = () => {
    modal.current.open();
  };
  return (
    <>
      <ModalCart
        ref={modal}
        productCart={productCart}
        title="your cart"
        onIncreaseQuantity={onIncreaseQuantity}
        onDecreaseQuantity={onDecreaseQuantity}
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
          Cart ({numberItems})
        </button>
      </header>
    </>
  );
};

Header.propTypes = {
  productCart: PropTypes.shape({
    items: PropTypes.arrayOf(itemPropType).isRequired,
  }).isRequired,
  onIncreaseQuantity: PropTypes.func.isRequired,
  onDecreaseQuantity: PropTypes.func.isRequired,
};

export default Header;
