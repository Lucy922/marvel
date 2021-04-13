import Duvet from '../assets/img/Duvet.jpg'
import pillow from '../assets/img/pillow.jpg'
import bed from '../assets/img/bed.jpg'
import natural from '../assets/img/natural.jpg'
import download from '../assets/img/download.jpg'
import pink from '../assets/img/pink.jpg'
import images1 from '../assets/img/images1.jpg'
import image from '../assets/img/images.jpg'
import "./ProductDetails.css"
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const ProductDetails = () => {
  return (
    <div className="container">
      <div className="detail-content">
        <div className="thumbnail">
          <img src={image}></img>
          <div className="span-div">
            <span className="span active"></span>
            <span className="span"></span>
            <span className="span"></span>
            <span className="span"></span>
          </div>
        </div>
        <div className="detail">
          <h4 className="product-content-title">
            Whatever the name is
          </h4>
          <p className="product-descrip">fdjdtdfyrjht7tgjhguit7tjiuyiyhkjuitjftdtrseawarfyiuyoyi</p>
          <div className="amount-details">
            <div className="discount-price">
              UGX 118,400
          </div>
            <div className="discount">
              -20%
          </div>
          </div>
          <div className="amount">
            UGX 148,000
          </div>
          <div className="product-quantity">
            <button className="quantity-btn">-</button>
            <span className="quantity">1</span>
            <button className="quantity-btn">+</button>
          </div>

          <div className="buttons">
            <button className="btn1">Add to Bag</button>
            <Link to="/order">
              <button className="btn2">Buy Now</button>
            </Link>

          </div>
        </div>
      </div>



      <div className="related-products-div">
        <div className="related-products-nav">
          <div>
            <h6>RELATED PRODUCTS</h6>
          </div>
          <div className="navigation-div">
            <span className="left-navigation">
              <FaChevronLeft />
            </span>
            <span className="right-navigation">
              <FaChevronRight />
            </span>
          </div>
        </div>
        <div className="related-products">


          <div className="related-product-thumbnail">
            <div className="image">
              <img src={Duvet}></img>
            </div>
            <h3 className="related-product-name">
              Holiday Print Flannel Sheet Set
                </h3>
          </div>
          <div className="related-product-thumbnail">
            <div className="image">
              <div className="discount-tag">
                -20%
              </div>
              <img src={pillow}></img>
            </div>

            <h3 className="related-product-name">
              Norbury Scandinavian
            </h3>
          </div>
          <div className="related-product-thumbnail">
            <div className="image">
              <img src={natural} />
            </div>

            <h3 className="related-product-name">
              Holiday Print Flannel Sheet Set
              </h3>
          </div>
          <div className="related-product-thumbnail">
            <div className="image">
              <img src={download} />
            </div>

            <h3 className="related-product-name">
              Norbury Scandinavian
              </h3>
          </div>
          <div className="related-product-thumbnail">
            <div className="image">
              <img src={pink} />
            </div>
            <h3 className="related-product-name">
              50' x '70 Jersy Weighted Throw
              </h3>
          </div>
          <div className="related-product-thumbnail">
            <div className="image">
              <img src={images1} />
            </div>
            <h3 className="related-product-name">
              Flannel Herringbone
              </h3>
          </div>
          <div className="related-product-thumbnail">
            <div className="image">
              <img src={bed} />
              <div className="discount-tag">
                -20%
          </div>
            </div>
            <h3 className="related-product-name">
              Norbury Scandinavian
              </h3>
          </div>
        </div>

      </div>

    </div>
  )
}

export default ProductDetails