import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../store/cartSlice";

const Product = ({ id, image, title, price, description }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItemToCart(id));
  };

  return (
    <li>
      <article className="bg-sub-2-brand rounded-lg overflow-hidden h-full flex flex-col">
        <div>
          <img src={image} alt={title} className="w-full" />
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <h2 className="text-brand text-2xl">{title}</h2>
          <p className="text-sub-3-brand">${price}</p>
          <p className="my-3">{description}</p>
          <div className="flex justify-end mt-auto">
            <button
              className="px-4 py-2 bg-sub-4-brand text-black rounded-md"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </article>
    </li>
  );
};

Product.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Product;
