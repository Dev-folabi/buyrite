import './category-item.style.css'

const Category = ({category}) =>{
const { name, image } = category;
    return (
      <div className="category-container">
        <div
          className="background-image"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="category-body-container">
          <h2>{name}</h2>
          <p>Shop Now</p>
        </div>
      </div>
    );
}

export default Category