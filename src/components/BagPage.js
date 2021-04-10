import "./BagPage.css"
import image from '../assets/img/image.png'
import { Link } from "react-router-dom";

const BagPage = () => {
  return (
    <div>
       <div className="img">
           <img src={image} />
           <div className="pt">
           <h3 className="emp">
            It's empty here
            </h3>
            <p className="paragraph">
            Start shopping to add items to your bag
            </p>
           </div>
           <div className="btn-btn">
             <Link to="/" type="page-btn">Back to homepage</Link>
           </div>
        </div>
    </div>
  )
}

export default BagPage