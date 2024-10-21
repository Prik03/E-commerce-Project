// import { useDispatch, useSelector } from "react-redux";
// import { AppDispatch, RootState } from "../../store";
// import {
//   setProduct,
//   setLoading,
//   setError,
// } from "../../redux/slices/productSlice";
// import { Product } from "../../Types/productTypes";
// import { useEffect } from "react";

// const ProductsList = () => {
//   const dispatch = useDispatch<AppDispatch>();
//   const { productList, isLoading, error } = useSelector(
//     (state: RootState) => state.products
//   );

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         dispatch(setLoading(true));
//         const response = await fetch("/api/products");
//         const data: Product[] = await response.json();
//         dispatch(setProduct(data));
//       } catch (err) {
//         dispatch(setError("failed to load products"));
//       } finally {
//         dispatch(setLoading(false));
//       }
//     };

//     fetchProducts();
//   }, [dispatch]);

//   if (isLoading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div>
//       <h2>Product List</h2>

//       <ul>
//         {productList.map((product) => {
//           <li key={product.id}>
//             {product.name}- ${product.price}
//           </li>;
//         })}
//       </ul>
//     </div>
//   );
// };

// export default ProductsList;

import React from "react";
import products, { Product } from "../../productData";
import { additems } from "../../redux/slices/cartSlice";
import { useDispatch } from "react-redux";
const ProductList = () => {
  const dispatch = useDispatch();

  return (
    <div className="product-list">
      {products.map((product: Product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>${product.price.toFixed(2)}</p>
          <button
            className="btn btn-success"
            onClick={() =>
              dispatch(
                additems({
                  name: product.name,
                  id: product.id,
                  Price: product.price,
                })
              )
            }
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
