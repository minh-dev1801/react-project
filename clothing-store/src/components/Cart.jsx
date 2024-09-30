import PropTypes from "prop-types";

const itemPropType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
});

const Cart = ({ productCart }) => {
  const numberItems = productCart.items.length;
  return (
    <>
      <button className="px-6 py-2 text-stone-950 bg-brand rounded-md text-xl">
        Cart ({numberItems})
      </button>
    </>
  );
};

Cart.propTypes = {
  productCart: PropTypes.shape({
    items: PropTypes.arrayOf(itemPropType).isRequired,
  }).isRequired,
};

export default Cart;
