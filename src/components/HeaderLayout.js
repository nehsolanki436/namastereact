import logo from "./logo.jpg"
import {Link} from "react-router-dom"
const HeaderLayout =()=>{
    const logoStyle = {
      height: '100%',
      width: '40%'
    };
      
      return (
      <div className="header-container">
       <div className="logo-container">
         <img src="/logo.jpg" style={logoStyle}></img>
       </div>
       <div className="navigation-container">
         <ul className="nav-menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="about">About Us</Link></li>
          <li>Contact Us</li>
          <li>Cart</li>  
         </ul>
         
       </div>
  
      </div>
  
      );
  }

  export default HeaderLayout;