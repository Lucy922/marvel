import "./Items.css"
import image from '../assets/img/images.jpg'

const Items = ({ title, amount }) => {
  return (
    <div>

      <div>
        <h3 className="category-title">
           Electronics
           <span className="category-product-count">12</span>
        </h3>
      </div>

      <div className="products">
        <a href="#">
          <div className="product-details">
            <img src={image} />
            <div>
              <div className="product-subtitle">{title}</div>
              <div className="product-price">{amount}</div>
            </div>
          </div>
          <div className="product-button">
            <button className="btn">+ Add</button>
          </div>
        </a>
      </div>

    </div>
  )
}

export default Items