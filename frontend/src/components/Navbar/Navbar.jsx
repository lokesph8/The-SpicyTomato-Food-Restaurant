import React, { use, useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({setShowLogin}) => {

    const [menu,setMenu] = useState("home");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const {getTotalCartAmount} = useContext(StoreContext);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };


  return (
    <div className='navbar'>
        <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
        <ul className={`navbar-menu ${mobileMenuOpen ? "active" : ""}`}>
            <Link to='/' onClick={()=>{setMenu("home"); setMobileMenuOpen(false);}} className={menu==="home"?"active":""}>home</Link>
            <a href='#explore-menu' onClick={()=>{setMenu("menu"); setMobileMenuOpen(false); }} className={menu==="menu"?"active":""}>menu</a>
            <a href='#app-download' onClick={()=>{setMenu("mobile-app"); setMobileMenuOpen(false); }} className={menu==="mobile-app"?"active":""}>mobile-app</a>
            <a href='#footer' onClick={()=>{setMenu("contact-us"); setMobileMenuOpen(false); }} className={menu==="contact-us"?"active":""}>contact us</a>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="" />
            <div className="navbar-search-icon">
                <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
                <div className={getTotalCartAmount()===0?"":"dot"}></div>
            </div>
            <button onClick={()=>setShowLogin(true)}>Sign in</button>
             <div className={`hamburger ${mobileMenuOpen ? "open" : ""}`} onClick={toggleMobileMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        </div>
    </div>
  )
}

export default Navbar