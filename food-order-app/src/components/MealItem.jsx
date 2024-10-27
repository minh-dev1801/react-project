import PropTypes from "prop-types";
import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button";
import { useContext } from "react";
import CartContext from "../store/CartContext";

const MealItem = ({ meal }) => {
  const cartCtx = useContext(CartContext);

  const handleAddMealToCart = () => {
    cartCtx.addItem(meal);
  };

  return (
    <li className="overflow-hidden rounded-lg bg-[#1d1a16] pb-4 text-center shadow-md">
      <article className="flex h-full flex-col justify-between">
        <img
          className="h-[20rem] w-full rounded-t-lg object-cover"
          src={`http://localhost:5000/${meal.image}`}
          alt={meal.name}
        />
        <div className="px-4">
          <h3 className="my-3 text-xl font-bold text-white">{meal.name}</h3>

          <span className="inline-block rounded-md bg-[#312c1d] px-8 py-2 text-xs font-bold text-[#ffc404]">
            {currencyFormatter.format(meal.price)}
          </span>

          <p className="my-4 text-sm text-white">{meal.description}</p>
        </div>
        <p>
          <Button onClick={handleAddMealToCart}>Add to Cart</Button>
        </p>
      </article>
    </li>
  );
};

MealItem.propTypes = {
  meal: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
};

export default MealItem;
