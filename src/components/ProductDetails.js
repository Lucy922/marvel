import image from '../assets/img/images.jpg'
import "./ProductDetails.css"

const ProductDetails = () => {
  return (
    <div className="container">
      <div className="detail-content">
        <div className="thumbnail">
          <img src={image}></img>
        </div>
        <div className="detail">
          <h4 className="detail-content-title">
            Whatever the name is
          </h4>
          <p className="product-descrip">fdjdtdfyrjht7tgjhguit7tjiuyiyhkjuitjftdtrseawarfyiuyoyi</p>
          <div className="amount-details">
            <div className="amount">
              UGX 118,400
          </div>
            <div className="discount">
              -20%
          </div>
          </div>

          <div className="discount-amount">
            UGX 148,000
          </div>
          <div className="product-quantity">
            <button className="quantity-btn">-</button>
            <span className="quantity">1</span>
            <button className="quantity-btn">+</button>
          </div>

          <div className="buttons">
          <button className="btn1">Add to Bag</button>
          <button className="btn2">Buy Now</button>
        </div>
        </div>
      </div>

      <div>
        <div>
          <h6>RELATED PRODUCTS</h6>
        </div>
        <div></div>
      </div>

    </div>
  )
}

export default ProductDetails