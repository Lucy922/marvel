import "./RightSidebar.css"
import image from '../assets/img/image.png'

const RightSidebar = () => {
  return (
       <div className="right-sidenav">
         <div>
        <h3 className="bag">
            Bag 
           <div className="numb">0</div> 
        </h3>
      </div>
        <div className="img">
           <img src={image} />
        </div>
    
        <div className="text-box">
          <h3 className="emp">
            It's empty here
            </h3>
          <p className="paragraph">
            Start shopping to add items to your bag
            </p>
        </div>
    </div>
    
   
  )
}

export default RightSidebar