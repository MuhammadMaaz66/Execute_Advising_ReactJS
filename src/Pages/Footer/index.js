import React from 'react'
import './style.css'

const Footer = () => {
    return (
        <div className='Footer'>
            <div className='Container'>
                <ul>
                    <li className='NavItem'>
                        <a href='/'>Home</a>
                    </li>
                    <li className='NavItem'>
                        <a href='#About'>About</a>
                    </li>
                    <li className='NavItem'>
                        <a href='#Testimonials'>Testimonials</a>
                    </li>
                    <li className='NavItem'>
                        <a href='#Demo'>Demo</a>
                    </li>
                </ul>
                <div className='Bottom'>
                    <span className='Line' />
                    <p>2022 Execute, Inc. All rights reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer