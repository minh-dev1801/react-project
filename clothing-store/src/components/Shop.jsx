import { useSelector } from "react-redux";
import Product from "./Product";

const Shop = () => {
  const { results, query } = useSelector((state) => state.search);
  const { itemsList } = useSelector((state) => state.pagination);

  let dislayProducts;
  if (query.trim() !== "") {
    if (results.length !== 0) {
      dislayProducts = (
        <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {results.map((product) => (
            <Product key={product.id} {...product} />
          ))}
        </ul>
      );
    } else {
      <p className="text-xl text-center">
        No products found for &quot;{query}&quot;.
      </p>;
    }
  } else {
    dislayProducts = (
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
      {dislayProducts}
    </section>
  );
};

export default Shop;
