import "./BagPage.css"
import image from '../assets/img/image.png'
import { Link } from "react-router-dom";
import Header from './Header'

const BagPage = () => {
  return (
    <>
    <Header />
    <div>
      <div className="category-thumbnail">
        <img src={image} alt="category thumbnail" />
        <div className="category-message">
          <h3 className="category-message-title">
            It's empty here
            </h3>
          <p className="category-text">
            Start shopping to add items to your bag
            </p>
        </div>
        <div className="btn-btn">
          <Link to="/" type="page-btn">Back to homepage</Link>
        </div>
      </div>
    </div>
    </>
    
  )
}

export default BagPage