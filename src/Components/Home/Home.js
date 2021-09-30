import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="container">
            <div className="img App-logo">
                <img src="./monir.jpg" alt="monir" />
            </div>
            <div className="body">
                <h1 className="about-name">Name: Monir Hossain</h1>
                <h2 className="about-name">Profession: I'm Junior Web Developer</h2>
                <h1 className="about-name">Call Me : +880 1747706163</h1>
            </div>
        </div>
    );
};

export default Home;