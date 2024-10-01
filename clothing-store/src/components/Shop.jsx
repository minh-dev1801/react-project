import { useSelector } from "react-redux";
import Product from "./Product";


const Shop = () => {
  const { results, query } = useSelector((state) => state.search);

  return (
    <section className="w-[70%] mx-auto my-14">
      <h2 className="text-3xl text-sub-brand uppercase mb-6">
        {query.trim() !== ""
          ? `Search Results for "${query}"`
          : "Elegant Clothing For Everyone"}
      </h2>

   

      {query.trim() !== "" && results.length === 0 ? (
        <p className="text-xl text-center">No products found for &quot;{query}&quot;.</p>
      ) : (
        <ul className="grid gap-8 grid-cols-auto-fit-minmax">
          {results.map((product) => (
            <Product key={product.id} {...product} />
          ))}
        </ul>
      )}
    </section>
  );
};

export default Shop;
