import { Provider } from "react-redux";
import Header from "./components/Header";
import Shop from "./components/Shop";
import store from "./store/store";

export default function App() {
  return (
    <Provider store={store}>
      <Header />
      <Shop />
    </Provider>
  );
}
