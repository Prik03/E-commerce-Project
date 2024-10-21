import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../store";
import { removeItems } from "../../redux/slices/cartSlice";

const Cart = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items, totalPrice, totalQuantity } = useSelector(
    (state: RootState) => state.cart
  );

  return (
    <div>
      <h2>Shopping Cart</h2>
      <p>Total Quantity : {totalQuantity}</p>
      <p>Total Price : {totalPrice}</p>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {" "}
            {item.name} - ${item.Price}
            <button
              className="btn btn-primary"
              onClick={() => dispatch(removeItems({ id: item.id }))}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
