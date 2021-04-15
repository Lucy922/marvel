import { FaSearch } from "react-icons/fa"
import "./Content.css"
import Products from "./Products"

const Content = ({products}) => {
  return (
   <div className="content">
     <div className="search__wrapper">
       <form className="search">
         <input className="search__input" type="text" placeholder="search products..."  />
         <button className="search__btn"><FaSearch /></button>
       </form>
     </div>
      <Products products={products}/>
  </div>
    
   
  )
}

export default Content