import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as Logo } from "../../assests/crown.svg";
import CartIcon from "../../componenet/cart-icon/cart-icon.component";
import CartDropdown from "../../componenet/cart-dropdown/cart-dropdown.component";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart-context";
import "./navigation.styles.css";
import { signOutUser } from "../../utils/firebase/firebase.utils";



const Navigation = () => {
  const { currentUser } = useContext(UserContext);
const { isCartOpen } = useContext(CartContext);
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              Sign Out
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              Sign In
            </Link>
          )}

          <Link>
            <CartIcon />
          </Link>
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
