import React from 'react';
import Stars from './Stars'

const star = () => <div className="star"></div>;

const STARS = 25;
var starDivs = Array.from('x'.repeat(STARS))

const Hero = () => {

    return(
        <div className="hero">
            <div className="frame">
                <div className="constellation stars-a">
                    {starDivs.map((star, index) => <div className="star" key={index}></div> )}
                </div>
                <div className="constellation stars-b">
                    {starDivs.map((star, index) => <div className="star" key={index}></div> )}
                </div>
                <div class="moon"></div>
                <div class="wolf"></div>
            </div>
            <div className="intro">
                <h1><span>Jean Diaz</span></h1>
                <h1> <strike>Wolf</strike> Web Developer</h1>
            </div>
        </div>
    )
}

export default Hero