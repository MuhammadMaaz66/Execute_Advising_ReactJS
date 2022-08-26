import React from 'react'
import './style.css'
import John from '../../Theme/images/john-doe.png'

const About = () =>{
    return(
        <div className="About" id='About'>
            <div className="Container">
                <img src={John} alt="John-Doe" />
                <div className='col-2'>
                    <h2>About</h2>
                    <span className='Line'></span>
                    <p>Intense is an International Financial Planning company with offices in multiple jurisdictions over the world. Working with Intense gives me the ability to advise international expatriates living in the Middle East from where I live in USA.</p>
                    <p>I am John Doe, a senior advisor for an independently owned financial planning company called Intense.</p>
                    <button className='Button'>Explore More</button>
                </div>
            </div>
        </div>
    )
}
export default About