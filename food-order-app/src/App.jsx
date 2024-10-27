import Cart from "./components/Cart";
import Header from "./components/Header";
import Meals from "./components/Meals";
import "./index.css";
import { CartContextProvider } from "./store/CartContext";
import { UserProgressContextProvider } from "./store/UserProgressContext";

const App = () => {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header />
        <Meals />
        <Cart />
      </CartContextProvider>
    </UserProgressContextProvider>
  );
};

export default App;
