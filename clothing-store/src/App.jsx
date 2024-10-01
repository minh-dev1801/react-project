import { Provider } from "react-redux";
import Header from "./components/Header";
import Shop from "./components/Shop";
import store from "./store/store";
import Search from "./components/Search";

export default function App() {
  return (
    <Provider store={store}>
      <Header />
      <Search />
      <Shop />
    </Provider>
  );
}
