import PropTypes from "prop-types";
import { PRODUCT_LIST } from "../product-list";
import Product from "./Product";

const Shop = ({ onAddToCart }) => {
  return (
    <section className="w-[70%] mx-auto my-8">
      <h2 className="text-3xl text-sub-brand uppercase mb-6">
        Elegant Clothing For Everyone
      </h2>
      <ul className="grid gap-8 grid-cols-auto-fit-minmax">
        {PRODUCT_LIST.map((product) => (
          <Product
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </ul>
    </section>
  );
};

Shop.propTypes = {
  onAddToCart: PropTypes.func.isRequired,
};

export default Shop;
