import "./Header.css"
import { FaHome, FaShoppingBag, FaUser } from 'react-icons/fa'
import { Link } from "react-router-dom";



const Header = () => {
  return (
   
   <div className="header">
   <div className="top">
     <div className="container">made in <a>SOKO</a> </div>
   </div>
   <div className="bottom">
     <div className="container">
       <div className="box-wrap">
         <div className="box1">
           <div className="icon"><FaHome /></div>
           <div>
           <h3 className="title">Target</h3> 
            <p className="para">Cham Towers, Plot 12 Nkrumah Rd, Kampala, Ug.</p>
           </div>
         </div>
         <div className="box2">
           <div className="icons">
          
             <div className="icon-wrap1">
              <FaShoppingBag />
                <Link to="/bag" className="icon-name1">Bag</Link>
            </div>
              <div className="icon-wrap2">
                <FaUser />
                <Link to="/account" className="icon-name2">Account</Link>
              </div>
          
           </div>
         </div>
       </div>
     </div>
   </div>
  </div>
   
  ) 
}

export default Header