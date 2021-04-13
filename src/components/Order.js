import "./Order.css"
import { FaCheck } from 'react-icons/fa'
import { Link } from "react-router-dom";

const Order = () => {
  return (
    <div className="container">
      <div className="order-div">
        <div className="account-div">
          <ul className="timeline">
            <li className="tl-item">
              <h3 className="tl-title">Account</h3>
              <div className="tl-txt">To place your order, log in by entering your 10 digit mobile number.</div>
              <div className="order-details">
                <label className="mobile">Mobile Number</label>
                <div className="form-input">
                  <div className="form">
                    <select>
                      <option>+256</option>
                    </select>
                    <input className="input" type="text" placeholder="Enter mobile number" />
                  </div>
                  <button className="login-btn">Login</button>
                </div>
              </div>
            </li>
            <li className="tl-item">
              <h3 className="tl-title">Delivery address</h3>
              <div className="tl-txt">Select your delivery address from the existing one or add new one.
              </div>
              <div className="info">
                <button className="btn-info">
                  <h4 className="client-name">Shrey karah</h4>
                  <div className="address">Quench Ville,Plot 12 Nkrumah Rd, Kampala, Uganda</div>
                  <div className="phone">+256 76 633 4574</div>
                </button>
                <button className="add-address">
                  <Link to="/modal"><b>+</b> Add New Address</Link>
              </button>
              </div>
            </li>
            <li className="tl-item">
              <span><FaCheck /></span>
              <div>
                <h3 className="tl-title">Payment</h3>
                <div className="tl-txt">Select payment method</div>
              </div>
            </li>
          </ul>
          <div className="payment">
            <div>
              <input className="checkbox" type="checkbox" checked />
            </div>
            <div className="msg">
              <h5>Cash on delivery</h5>
            </div>
          </div>
          <div className="order-button">
            <button className="order-btn">Place Order</button>
          </div>
        </div>
        <div className="bag">
          <div className="bag-header">
            <div className="bag-header-dt">
              <h3 className="name">
                Bag
                </h3>
              <div className="category-product-count">0</div>
            </div>
            <a href="#" className="clear-bag">Clear Bag</a>
          </div>
          <div>
            <div className="order">
              <div className="product-order">
                <h3 className="product-name">
                  Earrings and mangtikka
                  </h3>
                <div className="price-message">Per Price</div>
              </div>
              <div className="product-dt">
                <div>
                  <div className="order-price">UGX 118,400</div>
                  <div className="amount">UGX 148,000</div>
                </div>
                <div className="product-quantity">
                  <button className="quantity-btn">-</button>
                  <span className="quantity">1</span>
                  <button className="quantity-btn">+</button>
                </div>
              </div>
              <div className="product-order">
                <h3 className="product-name">
                  Colorful Earrings Jhumki
                  </h3>
                <div className="price-message">Per Price</div>
              </div>
              <div className="product-dt">
                <div>
                  <div className="order-price">UGX 118,400</div>
                </div>
                <div className="product-quantity">
                  <button className="quantity-btn">-</button>
                  <span className="quantity">1</span>
                  <button className="quantity-btn">+</button>
                </div>
              </div>
            </div>
            <div className="sub-wrap">
              <div>
                <div className="subtotal">
                  <div>
                    <div className="subtotal-txt">
                      Subtotal
                    </div>
                    <div className="delivery">
                      Delivery
                </div>
                  </div>
                  <div>
                    <div className="price-tag">UGX 12,700</div>
                    <div className="free">Free</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="total">
              <div>
                <div className="total-txt">
                  Total
                </div>
                <div className="tax-msg">
                  <i>inclusive of all taxes</i>
                </div>
              </div>
              <div className="total-price">UGX 12,700</div>
            </div>
            <div className="alert">Your about to save UGX 27,400 on this order</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Order