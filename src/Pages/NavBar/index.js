import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../../Theme/images/logo.png'
import './style.css'

const NavBar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMenu = () => setClick(false)
    return (
        <div className='header'>
            <nav className='NavBar'>
                <a href='/' className='logo'>
                    <img src={logo} alt="logo" />
                </a>
                <div className='HamBurger' onClick={()=> handleClick()}>
                    {click ? (<FaTimes size={30} style={{ color: '#fff' }} />) : (<FaBars size={30} style={{ color: '#fff' }} />)}
                </div>
                <ul className={click ? 'NavMenu active' : 'NavMenu'} navbarScroll>
                    <li className='NavItem'>
                        <a href='/' onClick={()=> closeMenu()}>Home</a>
                    </li>
                    <li className='NavItem'>
                        <a href='#About' onClick={()=> closeMenu()}>About</a>
                    </li>
                    <li className='NavItem'>
                        <a href='#Testimonials' onClick={()=> closeMenu()}>Testimonials</a>
                    </li>
                    <li className='NavItem'>
                        <a href='#Demo' onClick={()=> closeMenu()}>Demo</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar