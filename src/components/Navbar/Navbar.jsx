import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import './Navbar.css'



const Navbar = () => {
    return (
        <div className='navbar'>
            <Link to='/' >
                <img className='logo' src={assets.safestep} alt="" />
            </Link>
            <ul className='navbar-menu'>
                <Link>Home</Link>
                <a href='#how'>How it Works</a>
                <a href='#mobile'>App Download</a>
                <a href='#about'>Services</a>
                <a href='#footer'>Contact Us</a>
            </ul>
        </div>
    )
}

export default Navbar
