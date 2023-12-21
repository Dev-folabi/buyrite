import { useContext } from "react";
import { CartContext } from "../../contexts/cart-context";
import "./cart-icon.styles.scss";

import { ReactComponent as ShoppingIcon } from "../../assests/shopping-bag.svg";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const cartToggle = () => setIsCartOpen(!isCartOpen); 

  const mouseHoverd = ()=>{
    setIsCartOpen(!isCartOpen); 
  }
 

  return (
    <div className="cart-icon-container" onClick={cartToggle} onMouseEnter={mouseHoverd} >
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
