import React from "react";
import './style.css'
import User1 from '../../Theme/images/user1.jpeg'
import User2 from '../../Theme/images/user2.jpeg'
import User3 from '../../Theme/images/user3.jpeg'

const Testimonial = () =>{
    return(
        <div className="Testimonials" id="Testimonials">
            <div className="Container">
                <h2>Testimonials</h2>
                <span className="Line"></span>
                <div className="Content">
                    <div className="Card">
                        <img src={User1} alt="User1" />
                        <p>It is not everyday that you come across a passionate and trustworthy financial advisor. John Doe is true professional who does his work really well. Thanks John!</p>
                        <p><span>Johnson.M.J.</span></p>
                        <p>Director of "Financial Times"</p>
                    </div>
                    <div className="Card">
                        <img src={User2} alt="User1" />
                        <p>In just two very short meetings with John he managed to find the solution personally catered to my situation and expectations. Punctual, well-informed and very reliable.</p>
                        <p><span>Carol Harper</span></p>
                        <p>Director at Risktec Solutions Ltd.</p>
                    </div>
                    <div className="Card">
                        <img src={User3} alt="User1" />
                        <p>A very professional financial advisor who is true to his word. John has demonstrated a high amount of integrity in the time I have known him, and he is fast to respond to my concerns.</p>
                        <p><span>Snow.J.R.</span></p>
                        <p>Managing Director of BPW Global</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Testimonial