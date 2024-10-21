import { Provider } from "react-redux";
import store from "./store";
import ProductsList from "./features/products/ProductsList";
import Cart from "./features/cart/Cart";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>E-Commerce App</h1>
        <ProductsList />
        <Cart />
      </div>
    </Provider>
  );
};

export default App;
