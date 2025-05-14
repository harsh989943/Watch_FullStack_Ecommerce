import React, { useContext, useRef, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import cart_icon from '../Assets/cart_icon.png';
import { ShopContext } from "../../Context/ShopContext";

function Navigation(){



    const[menu,setMenu]=useState();
    const {getTotalCartItem}=useContext(ShopContext);
    const menuRef=useRef()

    const dropdown_toggle = (e)=>{
       menuRef.current.classList.toggle("nav-menu-visible")
      e.target.classList.toggle("open")
    
    }



return(
    <div className="navbar">
        <div className="nav-logo">
        <p>SIGAN</p>   
</div>

<ul ref={menuRef}  className="nav-menu">

   <li onClick={()=>{setMenu("shop")}}><Link  style={{textDecoration:"none"}} to="/"> SHOP</Link>{menu==="shop"?<hr/> : <></>}</li>
   <li onClick={()=>{setMenu("men")}}><Link  style={{textDecoration:"none"}} to="/mens">MEN</Link>{menu==="men"?<hr/> : <></>}</li>
   <li onClick={()=>{setMenu("women")}}><Link  style={{textDecoration:"none"}} to="/womens">WOMEN</Link>{menu==="women"?<hr/> : <></>}</li>
   <li onClick={()=>{setMenu("kids")}}><Link  style={{textDecoration:"none"}} to="/kids">KIDS</Link>{menu==="kids"?<hr/> : <></>}</li>
</ul>
<div className="nav-login-cart">
{localStorage.getItem("auth-token") ? (
  <button onClick={() => { 
    localStorage.removeItem("auth-token"); 
    window.location.replace("/"); 
  }}>
    Logout
  </button>
) : (
  <Link to="/login">
    <button>Login</button>
  </Link>
)}
<img src={cart_icon} alt=""/>

<Link to="cart"><div className="nav-cart-count">{getTotalCartItem()}</div></Link>

</div>



    </div>
   

);

}

export default Navigation;