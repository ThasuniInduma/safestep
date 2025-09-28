import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import './Navbar.css'



const Navbar = () => {
    const [menu, setMenu] = useState("home")

    return (
        <div className='navbar'>
            <Link to='/' >
                <img className='logo' src={assets.safestep} alt="" />
            </Link>
            <ul className='navbar-menu'>
                <Link onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</Link>
                <a href='#about-section' onClick={()=>setMenu("about-section")} className={menu==="about-section"?"active":""}>How it Works</a>
                <a href='#mobile' onClick={()=>setMenu("mobile")} className={menu==="mobile"?"active":""}>App Download</a>
                <a href='#services' onClick={()=>setMenu("services")} className={menu==="services"?"active":""}>Services</a>
                <a href='#footer' onClick={()=>setMenu("footer")} className={menu==="footer"?"active":""}>Contact Us</a>
            </ul>
        </div>
    )
}

export default Navbar
