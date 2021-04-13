import "./RightSidebar.css"
import image from '../assets/img/image.png'

const RightSidebar = () => {
  return (
    <div className="right-sidebar">
      <div className="category">
        <h3 className="category-name">
          Bag
        </h3>
        <div className="category-product-count">0</div>
      </div>
      <div className="category-thumbnail">
        <img src={image} />
        <div className="category-message">
          <h3 className="category-message-title">
            It's empty here
            </h3>
          <p className="category-text">
            Start shopping to add items to your bag
            </p>
        </div>

      </div>
    </div>


  )
}

export default RightSidebar