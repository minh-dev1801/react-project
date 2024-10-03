import { Provider } from "react-redux";
import Header from "./components/Header";
import Shop from "./components/Shop";
import store from "./store/store";
import Search from "./components/Search";
import Pagination from "./components/Pagination";

export default function App() {
  return (
    <Provider store={store}>
      <Header />
      <main className="mt-[120px]">
        <Search />
        <Shop />
        <Pagination />
      </main>
    </Provider>
  );
}
