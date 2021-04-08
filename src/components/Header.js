import "./Header.css"
import { FaHome, FaShoppingBag, FaUser } from 'react-icons/fa'
// import { FaShoppingBag } from 'react-icons/fa'

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
                <a href="#" className="icon-name1">Bag</a>
            </div>
              <div className="icon-wrap2">
                <FaUser />
                <a href="#" className="icon-name2">Account</a>
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