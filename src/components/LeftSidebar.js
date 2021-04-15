import { FaChevronRight } from "react-icons/fa"
import "./LeftSidebar.css"
import { Link } from "react-router-dom";

const LeftSidebar = () => {
  return (
    <div className="left-sidenav">
      <div className="nav">
        <Link to="/success">Electronics (12)</Link>
        <a href="/">Face Masks (3)</a>
        <a href="/">Fresh Food (8)</a>
        <a href="/">Grocery (6)</a>
        <a href="/">Home (24)</a>
        <a href="/">Kids (9)</a>
      </div>


      <div className="category-link">
        <a href="/">
          View all categories <FaChevronRight />
        </a>
      </div>
    </div>
  )
}

export default LeftSidebar