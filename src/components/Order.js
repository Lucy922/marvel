import "./Order.css"
import { FaCheck } from 'react-icons/fa'
import { Link } from "react-router-dom";
import VerifyModal from './VerifyModal'
import Header from "./Header"
import { useState } from 'react'
import Modal from "./Modal";

const Order = () => {
  const [phoneNumber, setPhoneNumber] = useState("")
  const [modal, setModal] = useState(false)
  const [addressModal, setAddressModal] = useState(false)
  const change = () => setAddressModal(false)
  const toggle = () => setModal(false)
  const [accountStep, setAccountStep] = useState("active")
  const [addressStep, setAddressStep] = useState("inactive")
  const [paymentStep, setPaymentStep] = useState("inactive")
  const [selectedAddress, setSelectedAddress] = useState()

  const [addresses, setAddress] = useState([
    {
      name: "john Doe",
      number: 256873554342,
      city: "Kampala",
      address: "Quench ville,plot 12 Nkrumah Rd, Kampala,Ug"
    },
    {
      name: "john Doe",
      number: 256873554342,
      city: "Kampala",
      address: "Quench ville,plot 12 Nkrumah Rd, Kampala,Ug"
    }
  ])

  return (
    <>
    <Header />
      <div className="container">
        <div className="order-div">
          <div className="account-div">
            <ul className="timeline inactive">
              <li className={accountStep === "active" || accountStep === "done" ? "timeline__entry" : "timeline__entry inactive"}>
                <span className={accountStep === "active" || accountStep === "done" ? "timeline__id" : "timeline__id inactive"}>
                  {accountStep === "done" ? (<FaCheck />) : "1"}
                </span>
                <div className="timeline__content">
                  <h3 className="tl-title">
                    Account
                  </h3>
                  {accountStep !== "done" ? <div className="tl-txt">
                    To place your order, log in by entering your 10 digit mobile number.
                  </div> : <div className="tl-txt">
                    You are securely logged in.
                  </div>}

                  {accountStep !== "done" ? <div className="order-details">
                    <label className="mobile">
                      Mobile Number
                    </label>
                    <div className="form-input">
                      <div className="form">
                        <select>
                          <option>+256</option>
                        </select>
                        <input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className="input" type="text" placeholder="Enter mobile number" />
                      </div>
                      {phoneNumber === "" ? (
                        <button className="login-btn">Login</button>
                      ) : (
                        <button className="login-button" onClick={() => setModal(true)}>Login</button>
                      )}
                    </div>
                  </div> : ""}
                </div>
              </li>
              <li className={addressStep === "active" ? "timeline__entry" : "timeline__entry inactive"}>
                <span className={addressStep === "active" ? "timeline__id" : "timeline__id inactive"}>2</span>
                <div className="timeline__content">
                  <h3 className="tl-title">Delivery address</h3>
                  <div className="tl-txt">Select your delivery address from the existing one or add new one.
                  </div>
                  {addressStep === "active" ? <div className="info">
                    { addresses.map((address, i) => (
                      <button className={selectedAddress === i ? "btn-info active" : "btn-info" } key={i} onClick={(e) => {
                        setSelectedAddress(i)
                      }}>
                        {selectedAddress === i ? (
                          <span className="checked"><FaCheck /></span>
                        ) : ""}
                        <h4 className="client-name">{address.name}</h4>
                        <div className="address">{address.address}</div>
                        <div className="phone">{address.number}</div>
                      </button>
                    ))}
                    <button className="add-address" onClick={() => setAddressModal(true)}>
                       + Add New Address
                    </button>
                    
                  </div> : ""}
                  <button className="continue_btn">Continue</button>
                </div>
              </li>
              <li className={paymentStep === "active" ? "timeline__entry" : "timeline__entry inactive"}>
                <span className={paymentStep === "active" ? "timeline__id" : "timeline__id inactive"}>3</span>
                <div className="timeline__content">
                  <h3 className="tl-title">Payment</h3>
                  <div className="tl-txt">Select payment method</div>
                  {paymentStep === "active" ? <div className="payment">
                    <div>
                      <input className="checkbox" type="checkbox" checked />
                    </div>
                    <div className="msg">
                      <h5>Cash on delivery</h5>
                    </div>
                    <div className="order-button">
                      <button className="order-btn">Place Order</button>
                    </div>
                  </div>
                    : ""}

                </div>
              </li>
            </ul>
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
      {modal === true ? <VerifyModal onToggle={toggle} setAddressStep={setAddressStep} setAccountStep={setAccountStep} /> : ""}
      {addressModal === true ? <Modal onChange={change} /> : ""}
    </>

  )
}

export default Order