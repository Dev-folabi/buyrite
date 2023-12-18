import {useContext} from 'react'
import { ProductContext } from '../../contexts/product-context'; 
import ProductCard from '../../componenet/product-card/product-card.component';
import "./shop.component.styles.scss";

const Shop = () => {
  const { currentShopData } = useContext(ProductContext)

  return (
    <div className='products-container'>
      {currentShopData.map((product) => {
        return <ProductCard key={product.id} products={product} />;
      })}
    </div>
  );
};

export default Shop;
