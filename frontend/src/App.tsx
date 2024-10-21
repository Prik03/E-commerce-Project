import { Provider } from "react-redux";
import store from "./store";
import Cart from "./features/cart/Cart";
import Layout from "./Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./features/products/ProductsList";
import Home from "./Home";
const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="product" element={<ProductList />} />
            <Route path="Cart" element={<Cart />} />
          </Route>
          {/* <div>
        <h1>E-Commerce App</h1>
        <ProductsList />
        <Cart />
      </div> */}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
