import React from "react";
import NavBar from "../NavBar";
import Hero from "../Hero";
import About from '../About';
import Testimonials from '../Testimonials'
import Demo from "../Demo";
import Footer from "../Footer";

const Home = () => {
    return(
        <div>
            <NavBar />
            <Hero />
            <About />
            <Testimonials />
            <Demo />
            <Footer />
        </div>
    )
}
export default Home