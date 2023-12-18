import "./product-card.styles.scss";

import Button from "../button/button.componenet";

const ProductCard = ({ products }) => {
  const { title, price } = products;
  const { image } = products.category;
  return (
    <div className="product-card-container">
      <img src={image} alt={`${title}`} />
      <div className="footer">
        <span className="name">{title}</span>
        <span className="price">$ {price}</span>
      </div>
      <Button buttonType={"inverted"}>Add to cart</Button>
    </div>
  );
};

export default ProductCard;
