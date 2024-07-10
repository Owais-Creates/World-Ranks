import React from 'react';
import './Hero.css';
import worldimage from "../../assets/hero-image.jpg"
import logo from "../../assets/Logo.svg"

const Hero = () => {
    return (
        <>
            <div className='hero-div'>
                <img className='hero-image' src={worldimage} alt="World" />
                <img className='hero-logo' src={logo} alt="" />
            </div>
        </>
    );
}

export default Hero