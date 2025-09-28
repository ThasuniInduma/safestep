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
                <a href='#about'>About</a>
                <a href='#app-download'>mobile app</a>
                <a href='#footer' >contact us</a>
            </ul>
        </div>
    )
}

export default Navbar
