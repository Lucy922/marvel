import "./TrackOrder.css"
import Header from "./Header"
import image from '../assets/img/Duvet.jpg'
import { FaCheckCircle, FaDotCircle } from 'react-icons/fa'

const TrackOrder = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="order-wrapper">
          <div className="order__div">
            <div className="order__steps">
              <div className="order__tab">
                <div className="tab__icon1"><FaDotCircle /></div>
                <div className="tab-text">
                  <h3 className="tab__heading">Target</h3>
                  <div className="order__text">
                    25/02/2021, 1:55 PM | 3 Items | UGX 1,600
                 </div>
                </div>
              </div>
            </div>
            <div className="order__steps">
              <div className="order__tab">
                <div className="tab__icon2"><FaCheckCircle /></div>
                <div className="tab-text">
                  <h3 className="tab__heading">Order Confirmed</h3>
                  <div className="order__text">
                    25/02/2021, 2:15 PM
                 </div>
                </div>
              </div>
            </div>
            <div className="order__steps">
              <div className="order__tab">
                <div className="tab__icon2"><FaCheckCircle /></div>
                <div className="tab-text">
                  <h3 className="tab__heading">Shipped</h3>
                  <div className="order__text">
                    04/03/2021, 09:01 AM
                 </div>
                </div>
              </div>
            </div>
            <div className="order__steps">
              <div className="order__tab">
                <div className="tab__icon3"><FaCheckCircle /></div>
                <div className="tab-text">
                  <h3 className="tab__heading">Delivered</h3>
                  <div className="order__text">
                    The delivery partner is on his way to deliver your order.
                 </div>
                </div>
              </div>
            </div>
            <div className="product-order">
              <div className="product__tab">
              <div className="product__image">
                <img src={image} alt="product image" />
              </div>
              <div className="product__text">
                <div className="product__heading">Norbury Scandinavian Wood Leg Ottoman</div>
                <div className="product__descrip">
                  <div className="size">Size: <b>Medium</b> </div>
                  <div className="colour"> Colour: <span className="colour__span1"></span></div>
                </div>
                <div className="product__dt">
                  <div className="x">X2</div>
                  <div className="product__price">UGX 4,000</div>
                </div>
              </div> 
              </div>

              <div className="product__tab">
              <div className="product__image">
                <img src={image} alt="product image" />
              </div>
              <div className="product__text">
                <div className="product__heading">Metal Country Chalet Charm and Wood Bench - Saracina Home</div>
                <div className="product__descrip">
                  <div className="size">Size: <b>Medium</b> </div>
                  <div className="colour"> Colour: <span className="colour__span2"></span></div>
                </div>
                <div className="product__dt">
                  <div className="x">X1</div>
                  <div className="product__price">UGX 8,700</div>
                </div>
              </div> 
              </div>
            </div>

            <div className="subtotal-div">
                    <div>
                      <div className="subtotal-txt">
                        Subtotal
                    </div>
                      <div className="delivery__text">
                        Delivery
                     </div>
                    </div>
                    <div>
                      <div className="price-tag">UGX 12,700</div>
                      <div className="free">Free</div>
                    </div>
                  </div>

                  <div className="total__div">
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
              <div className="alert__text">Your about to save UGX 27,400 on this order</div>
              <div className="delivery__details">
                <h3>YOUR DELIVERY DETAILS</h3>
                <div className="delivery__text">
                  <div><b>Shrey Karah</b></div> 
                  <b>cash on delivery</b>
                  </div>
                <div className="delivery__info">
                  <div className="phonenumber">+256 76 633 4574</div>
                  <div className="delivery__address">Quench Ville, Plot 12 Nkrumah Rd Kampala, Uganda</div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default TrackOrder