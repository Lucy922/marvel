import { FaChevronRight } from "react-icons/fa"
import "./LeftSidebar.css"

const LeftSidebar = () => {
  return (
    <div className="left-sidenav">
      <div className="nav">
        <a href="#">Electronics (12)</a>
        <a href="#">Face Masks (3)</a>
        <a href="#">Fresh Food (8)</a>
        <a href="#">Grocery (6)</a>
        <a href="#">Home (24)</a>
        <a href="#">Kids (9)</a>
      </div>


      <div className="category-link">
        <a href="#">
          View all categories <FaChevronRight />
        </a>
      </div>
    </div>
  )
}

export default LeftSidebar