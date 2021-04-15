import "./Account.css"
import Header from "./Header"
import { FaDotCircle, FaList, FaMapMarker, FaHome } from 'react-icons/fa'

const Account = () => {
  return (

    <>
    <Header />
    <div className="container">
      <div className="account">
        <div className="account-nav">
          <div className="category-div">
            <div className="order-nav">
              <div className="navigation">
                <div><FaList /></div>
                <div className="category-item">
                  <a href="address">My order</a></div>
              </div>
            </div>
            <div className="address-nav">
              <div><FaMapMarker /></div>
              <div className="category-item">
                <a href="address">My addresses</a></div>
            </div>
          </div>
        </div>
        <div className="orders">
          <div className="order-item">
            <div className="order-category-details">
              <FaDotCircle />
              <div className="order-item-title">Target</div>
            </div>
            <div className="order-details">
              <div className="item-detail">
                <div>
                  <div className="order-number">order #1284343</div>
                </div>
                <div>
                  <div className="order-amount">UGX 12,700</div>
                </div>
              </div>
              <div className="item-detail">
                <div className="order-quantity">3 items</div>
                <div className="order-time">25/02/2021, 1:55 pm</div>
              </div>
            </div>
            <div className="shipped">
              <div className="sp">
                <span></span>
              </div>
              <div>shipped</div>
            </div>
          </div>
          <div className="order-item">
            <div className="order-category-details">
              <div className="home-icon"><FaHome /></div>
              <div className="order-item-title">Abhi's Juke Store</div>
            </div>
            <div className="order-details">
              <div className="item-detail">
                <div>
                  <div className="order-number">order #1284343</div>
                </div>
                <div>
                  <div className="order-amount">UGX 5,400</div>
                </div>
              </div>
              <div className="item-detail">
                <div className="order-quantity">1 items</div>
                <div className="order-time">26/02/2021, 1:55 pm</div>
              </div>
            </div>
            <div className="delivery">
              <div className="spn">
                <span></span>
              </div>
              <div className="delivered">Delivered</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>

  )
}

export default Account