import { useState } from "react";
import Header from "./components/Header";
import Shop from "./components/Shop";
import { PRODUCT_LIST } from "./product-list";

export default function App() {
  const [productCart, setProductCart] = useState({
    items: [],
  });
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
  const handleDecreaseQuantity = (id) => {
    setProductCart((preProductCart) => {
      const updateItems = preProductCart.items.map((item) => {
        if (item.id === id) {
          let newCount = item -1;
          return newCount > 0 ? {...item, count: newCount} : null;
        }
        return item;
      }).filter((item) => item !== null)
      return {
        ...preProductCart,
        items: updateItems,
      };
    });
  };
  const handleIncreaseQuantity = (id) => {
    setProductCart((preProductCart) => {
      const updateItems = preProductCart.items.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            count: item.count + 1,
          };
        }
        return item;
      });
      return {
        ...preProductCart,
        items: updateItems,
      };
    });
  };
  return (
    <>
      <Header
        productCart={productCart}
        onDecreaseQuantity={handleDecreaseQuantity}
        onIncreaseQuantity={handleIncreaseQuantity}
      />
      <Shop onAddToCart={handleAddToCart} />
    </>
  );
}
