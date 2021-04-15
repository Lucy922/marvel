import "./Products.css"
import { Link } from "react-router-dom";

const Products = ({ products }) => {
  return (
    <div>
      <div>
        <h3 className="category-title">
          Electronics
           <span className="category-product-count">12</span>
        </h3>
      </div>

      <div className="products">
        {products.map((product) => (
          <Link to="/details">
            <div className="product">
              <div className="product-details">
                <img src={product.thumbnail} alt="this is a thumbnail" />
                <div>
                  <div className="product-title">{product.title}</div>
                  <div className="product-price">{product.price}</div>
                </div>
              </div>
              <div className="add-button">
                <button className="btn">+ Add</button>
              </div>
            </div>
          </Link>
        ))}
      </div>

    </div>
  )
}

export default Products