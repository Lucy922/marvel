import Header from "./Header"
import "./OrderSuccess.css"
import { Link } from "react-router-dom";
import image from '../assets/img/images2.jpg'

const OrderSuccess = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="image">
          <img src={image} alt="successful" />
          <div className="heading-wrap">
            <h5 className="heading">
              Thank you
            </h5>
            <h5 className="heading">
              Your order has been placed successfully!
          </h5>
            <div className="image-text">
              you will recieve a confirmation message as soon as the order is accepted
          </div>
            <div className="order-number">Order Number: <b>John-271e</b></div>
            <div className="btn-wrap">
              <div>
                <Link to="/trackorder">
                  <button className="track-order">Track Order</button>
                </Link>
              </div>
              <div>
                <Link to="/">
                  <button className="shopping">Continue Shopping</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>


  )
}

export default OrderSuccess