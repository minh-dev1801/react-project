import { useSelector } from "react-redux";
import Product from "./Product";


const Shop = () => {
  const { results, query } = useSelector((state) => state.search);
  const { itemsList } = useSelector((state) => state.pagination);
  

  let displayProducts;
  if (query.trim() !== "") {
    if (results.length !== 0) {
      displayProducts = (
        <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {results.map((product) => (
            <Product key={product.id} {...product} />
          ))}
        </ul>
      );
    } else {
      displayProducts = (
        <p className="text-3xl text-center">
          No products found for &quot;{query}&quot;.
        </p>
      );
    }
  } else {
    displayProducts = (
      <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {itemsList.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </ul>
    );
  }

  return (
    <section className="w-[90%] mx-auto my-14">
      <h2 className="text-3xl text-sub-brand uppercase mb-6">
        {query.trim() !== ""
          ? `Search Results for "${query}"`
          : "Elegant Clothing For Everyone"}
      </h2>
      {displayProducts}
    </section>
  );
};

export default Shop;
