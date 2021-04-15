import { FaIdCardAlt, FaShieldAlt, FaTruck, FaWhatsapp } from "react-icons/fa"
import "./Footer.css"

const Footer = () => {
  return (
    <div className="footer">
      <div className="top-footer">
        <div className="top-footer-details">
          <div className="footer-dt">
            <div className="footer-icon">
              <FaTruck />
            </div>
            <div className="footer-txt">
              <p>Fast delivery</p>
            </div>
          </div>
          <div className="footer-dt">
            <div className="footer-icon">
              <FaShieldAlt />
            </div>
            <div className="footer-txt">
              <p>Buyer Protection</p>
            </div>
          </div>
          <div className="footer-dt">
            <div className="footer-icon">
              <FaIdCardAlt />
            </div>
            <div className="footer-txt">
              <p>Customer Support</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-footer">
        <div className="bottom-footer-details">
          <div className="details">
            <div className="store-details">STORE DETAILS</div>
            <div className="address">
              <h4 className="target">Target</h4>
              <p className="text">Cham Towers, Plot 12 Nkrumah Rd, Kampala, Ug</p>
            </div>
            <div className="btn-link">
              <a href="/"> <FaWhatsapp /> Chat with us</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer