import "./Home.css"
import LeftSidebar from './LeftSidebar'
import RightSidebar from './RightSidebar'
import Content from './Content'
import { useState } from 'react'
import Header from "./Header"

const Home = () => {
  const [products] = useState([
    {
      title: "kids 2pk cloth face mask",
      price: "UGX 185,000",
      thumbnail: "https://cdn-5c3bee13f911c900b0a66064.closte.com/wp-content/uploads/SANDY-Chair-thumbnail-1.jpg"
    },
    {
      title: "kids 2pk cloth face mask",
      price: "UGX 185,000",
      thumbnail: "https://cdn-5c3bee13f911c900b0a66064.closte.com/wp-content/uploads/SANDY-Chair-thumbnail-1.jpg"
    },
    {
      title: "kids 2pk cloth face mask",
      price: "UGX 185,000",
      thumbnail: "https://cdn-5c3bee13f911c900b0a66064.closte.com/wp-content/uploads/SANDY-Chair-thumbnail-1.jpg"
    },
    {
      title: "kids 2pk cloth face mask",
      price: "UGX 185,000",
      thumbnail: "https://cdn-5c3bee13f911c900b0a66064.closte.com/wp-content/uploads/SANDY-Chair-thumbnail-1.jpg"
    },
    {
      title: "kids 2pk cloth face mask",
      price: "UGX 185,000",
      thumbnail: "https://cdn-5c3bee13f911c900b0a66064.closte.com/wp-content/uploads/SANDY-Chair-thumbnail-1.jpg"
    }
  ])
  return (
    <>
    <Header />
    <div className="container">
      <div className="wrapper">
        <LeftSidebar />
        <Content products={products} />
        <RightSidebar /> 
      </div> 
    </div>
    </>
    
  )
}

export default Home