import React, { Component } from "react";

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="work">
        <h1>My Work</h1>
        <p className="lead">To see the code at github click here</p>
        <div className="row project rearrange">
          <div className="col-sm-6">
            <h2>PW Roofing Site </h2>
            <div className="tags">
              <span>WordPress</span>
              <span>SASS</span>
              <span>Freelance</span>
            </div>
            <p>
              Redesign for Perfect Roofing Solutions : an up and coming roofing
              company ubicated on Miami Florida. After assesing their needs I
              decided to build a better website that not only would impress
              their clients but would rival their competitors sites.
            </p>
            <a
              className="project-btn pill-btn"
              href="http://pwroof.x10host.com/"
              target="_blank"
              role="button"
            >
              Visit the Website
            </a>
          </div>
          <div className="col-sm-6">
            <img
              src="https://jeankvd.github.io/img/caspers.png"
              alt="WooCommerce"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Work;
