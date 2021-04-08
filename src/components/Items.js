import "./Items.css"
import image from '../assets/img/images.jpg'

const Items = ({ title, amount}) => {
  return (
    <div>

      <div>
        <h3 className="title">
            Electronics 
           <div className="number">12</div> 
        </h3>
      </div>

      <div className="wrap">
        <a href="#">
        <div className="thumbnail">
        <img src={image} />
      </div>
        <div className="props">
          {title} 
          <p className="amount">{amount}</p>
        </div>
        <button className="btn">+ Add</button>
      </a>
      
      </div>
      
    </div>
  )
}

export default Items