import "./Home.css"
import LeftSidebar from './LeftSidebar'
import RightSidebar from './RightSidebar'
import Content from './Content'
import Order from './Order'

const Home = () => {
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

export default Home