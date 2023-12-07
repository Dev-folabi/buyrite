    import Category from "../category-item/category-item.component";
    import "./directory.styles.css";

    const Directory = ({categories}) =>{

        return(
    <div className="directory-container">
        {categories.map((category) => (
            <Category key={category.id} category={ category } />
        ))}
        </div>
        )
    }

    export default Directory