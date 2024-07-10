import React from 'react';
import './Hero.css';
import worldimage from "../../assets/hero-image.jpg"
import logo from "../../assets/Logo.svg"

const Hero = () => {
    return (
        <>
            <div className='all-parent-div'>
                <img className='all-parent-image' src={worldimage} alt="World" />
                <img className='all-parent-logo' src={logo} alt="" />
            </div>
        </>
    );
}

export default Hero