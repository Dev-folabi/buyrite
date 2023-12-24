import { useContext } from "react";
import { CartContext } from "../../contexts/cart-context";
import "./product-card.styles.scss";

import Button from "../button/button.componenet";



const ProductCard = ({ products }) => {
  const { title, price, images } = products;
  const image = images[0]

  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(products)
  return (
    <div className="product-card-container">
      <img src={image} alt={`${title}`} />
      <div className="footer">
        <span className="name">{title}</span>
        <span className="price">$ {price}</span>
      </div>
      <Button buttonType={"inverted"} onClick={addProductToCart}>
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
