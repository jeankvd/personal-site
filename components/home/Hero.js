import React from 'react';

const star = () => <div className="star"></div>;

const STARS = 25;
var starDivs = Array.from('x'.repeat(STARS))

const Hero = () => {

    return(
        <div className="hero" id="hero">
            <div className="view view-after" id="viewAfter">
      <div className="wrapper-after">
        <div className="logo">
          <h2> <img src="http://res.cloudinary.com/dub9ykyuq/image/upload/v1517696936/wolfsvg_hxf2jz.png" alt="" /> Jean Villalobos</h2>
        </div>
        <div className="img-wrapper">
          <img src="http://res.cloudinary.com/dub9ykyuq/image/upload/v1517697588/Untitled_wcfedl.png" alt="" />
        </div>
        <div className="img-shadow"></div>
        <div className="text-after">
          <h2>Web Developer combining Front-End Development, WordPress, and curiosity</h2>				<h2>... to create engaging user interfaces and experiences</h2>
        </div>
        <div className="arrow">
            <i className="fa fa-angle-down" aria-hidden="true"></i>
        </div> 
      </div>
    </div>
    <div className="view view-before" id="viewBefore">
      <div className="wrapper-before">
        <div className="logo">
          <h2> <img src="http://res.cloudinary.com/dub9ykyuq/image/upload/v1517696936/wolfsvg_hxf2jz.png" alt="" /> Jean Villalobos</h2>
        </div>
        <div className="img-wrapper">
          <img src="http://res.cloudinary.com/dub9ykyuq/image/upload/v1517696936/wolfsvg_hxf2jz.png" alt="" />
        </div>
        <div className="img-shadow"></div>
        <div className="text-before">
          <h2>Web Developer combining Front-End Development, WordPress, and curiosity</h2>
          <h2>... to create engaging user interfaces and experiences</h2>
        </div>
        <div className="arrow">
        </div>
      </div>
    </div>
    </div>
    )
}

export default Hero