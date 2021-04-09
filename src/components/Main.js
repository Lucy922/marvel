import "./Main.css"
import LeftSidebar from '../components/LeftSidebar'
import RightSidebar from '../components/RightSidebar'
import Content from "./Content"
import Footer from "../components/Footer"

const Main = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <LeftSidebar />
        <Content />
        <RightSidebar /> 
      </div> 
    </div>
  )
}

export default Main