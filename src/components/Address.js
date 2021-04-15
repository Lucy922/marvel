import "./Address.css"
import Header from "./Header"
import { FaList, FaMapMarker } from 'react-icons/fa'

const Address = ({onChange}) => {
  return (
    <>
    <Header />
    <div className="container">
      <div className="account">
        <div className="acc-wrap">
          <div className="acc-nav">
            <div className="category-div">
              <div className="order-category">
                <div>
                  <FaList />
                </div>
                <div className="category-item">
                  <a href="address">
                    My order</a>
                </div>
              </div>
              <div className="address-category">
                <div className="navigation">
                  <div>
                    <FaMapMarker />
                  </div>
                  <div className="category-item">
                    <a href="address">
                      My addresses
                      </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="information">
            <button className="info-btn">
              <h4 className="client-name">Shrey karah</h4>
              <div className="address">Quench Ville, Plot 12 Nkrumah Rd, Kampala, Uganda</div>
              <div className="phone">+256 76 633 4574</div>
              <div className="info-links">
                <div className="edit"><a href="address">Edit</a></div>
                <div className="delete"><a href="address">Delete</a></div>
              </div>
            </button>
            <button className="new-address" onClick={onChange}>
              + Add New Address
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
    
  )
}

export default Address