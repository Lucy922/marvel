import "./Header.css"
import { FaHome, FaShoppingBag, FaUser } from 'react-icons/fa'
import { Link } from "react-router-dom";



const Header = () => {
  return (

    <div className="header">
      <div className="top-header">
        <div className="container">made in <a>SOKO</a> </div>
      </div>
      <div className="bottom-header">
        <div className="container">
          <div className="bottom-header-wrap">
            <div className="left-div">
              <div className="icon"><FaHome /></div>
              <div>
                <h3 className="title">Target</h3>
                <p className="text">Cham Towers, Plot 12 Nkrumah Rd, Kampala, Ug.</p>
              </div>
            </div>
            <div>
              <div className="nav-links">
                <div className="nav-link">
                  <FaShoppingBag />
                  <Link to="/bag" className="nav-name">Bag</Link>
                </div>
                <div className="nav-link">
                  <FaUser />
                  <Link to="/account" className="nav-name">Account</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Header