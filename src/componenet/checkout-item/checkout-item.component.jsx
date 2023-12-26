import { useContext } from "react";
import { CartContext } from "../../contexts/cart-context";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
 const {addItemToCart, removeItemFromCart, deleteItemFromCart } =
   useContext(CartContext);

   const removeHandler = () => deleteItemFromCart(cartItem);
   const increaseHandler = () => addItemToCart(cartItem);
   const decreaceHandler = () => removeItemFromCart(cartItem);

  const { title, quantity, price, images } = cartItem;
  const image = images[0];
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={image} alt={`${title}`} />
      </div>
      <span className="name">{title}</span>

      <span className="quantity">
        <div className="arrow" onClick={decreaceHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={increaseHandler}>
          &#10095;
        </div>
      </span>
      <span className="price"> $ {price}</span>
      <span className="remove-button" onClick={removeHandler}>
        &#10005;
      </span>
    </div>
  );
};
export default CheckoutItem;
