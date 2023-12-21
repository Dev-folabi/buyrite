import "./cart-dropdown.styles.scss";
import CartItem from "../cart-item/cart-item.componet";

import Button from "../button/button.componenet";

const CartDropdown = () => {
 
  return (
    <div className="cart-dropdown-container" >
      <div className="cart-items"> 
      {[].map(item =><CartItem cartItem={item}/>)}
      </div>
      <Button> GO TO CHECKOUT </Button>
    </div>
  );
};

export default CartDropdown;
