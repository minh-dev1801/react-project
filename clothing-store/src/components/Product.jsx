import PropTypes from "prop-types";

const Product = ({ product }) => {
  return (
    <li>
      <article className="bg-sub-2-brand rounded-lg overflow-hidden h-full flex flex-col">
        <div>
          <img src={product.image} alt={product.title} className="w-full" />
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <h2 className="text-brand text-2xl">{product.title}</h2>
          <p className="text-sub-3-brand">${product.price}</p>
          <p className="my-3">{product.description}</p>
          <div className="flex justify-end mt-auto">
            <button className="px-4 py-2 bg-sub-4-brand text-black rounded-md">
              Add to Cart
            </button>
          </div>
        </div>
      </article>
    </li>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }),
};

export default Product;
