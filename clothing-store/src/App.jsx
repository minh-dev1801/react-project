import { useState } from "react";
import Header from "./components/Header";
import Shop from "./components/Shop";
import { PRODUCT_LIST } from "./product-list";

export default function App() {
  const [productCart, setProductCart] = useState({
    items: [],
  });
  console.log(productCart);
  const handleAddToCart = (id) => {
    setProductCart((preProductCart) => {
      const updateItems = [...preProductCart.items];
      let indexItem = updateItems.findIndex((item) => item.id === id);
      let item = updateItems[indexItem];
      if (item) {
        item = {
          ...item,
          count: item.count + 1,
        };
        updateItems[indexItem] = item;
      } else {
        let productSelected = PRODUCT_LIST.find((product) => product.id === id);
        updateItems.push({
          id: id,
          name: productSelected.title,
          price: productSelected.price,
          count: 1,
        });
      }
      return {
        items: updateItems,
      };
    });
  };
  return (
    <>
      <Header />
      <Shop onAddToCart={handleAddToCart} />
    </>
  );
}
