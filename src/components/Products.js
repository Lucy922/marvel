import "./Products.css"
import image from '../assets/img/images.jpg'
import { Link } from "react-router-dom";

const Products = ({ title, amount }) => {
  return (
    <div>
      <div>
        <h3 className="category-title">
          Electronics
           <span className="category-product-count">12</span>
        </h3>
      </div>

      <div className="products">
        <Link to="/details">
          <div className="product-details">
            <img src={image} />
            <div>
              <div className="product-title">{title}</div>
              <div className="product-price">{amount}</div>
            </div>
          </div>
          <div className="add-button">
            <button className="btn">+ Add</button>
          </div>
        </Link>
      </div>

    </div>
  )
}

export default Products