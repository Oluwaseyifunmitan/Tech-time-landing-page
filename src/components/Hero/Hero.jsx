import React from "react";
import NavBar from "../NavBar/NavBar.jsx";
import "./Hero.css";
import outward from "../../assests/outward.png";
import Frame95 from "../../assests/Frame95.png";
import Frame96 from "../../assests/Frame96.png";
import Frame97 from "../../assests/Frame97.png";
import Frame98 from "../../assests/Frame98.png";
import Frame99 from "../../assests/Frame99.png";
import Vector from "../../assests/Vector.png";
import Frame103 from "../../assests/Frame103.png";
import preview from "../../assests/preview.png";
import HeroFooter from "../HeroFooter/HeroFooter.jsx";
import AboutUs from "../AboutUs/AboutUs.jsx";
import Courses from "../Courses/Courses.jsx";
import Testimonial from "../Testimonial/Testimonial.jsx";
import Community from "../Community/Community.jsx";
import Footer from "../Footer/Footer.jsx";

const Hero = () => {
  return (
    <main>
<NavBar />
      <div className="container">
        
        <div className="hero">
          
          <div className="text">
            <h1 className="maintext">
                Grow your skills to <br />
                advance your career
              <br />
              path
            </h1>

            <p className="subtext">
              Build Your Future With Our Quality Eduaction.The Best and Largest
              All-
              <br />
              in-one Online Tutoring Platform in The World.
            </p>
            <div className="enrol-buttons">
              <button className="start">
                Get started Now
                <img className="arrow" src={outward} alt="arrow" />
              </button>
              <button className="enroll">Enroll Now</button>
            </div>
            <div className="images">
              <img className="icon1" src={Frame95} alt="icon1" />
              <img className="icon2" src={Frame96} alt="icon2" />
              <img className="icon3" src={Frame97} alt="icon3" />
              <img className="icon4" src={Frame98} alt="icon4" />
              <img className="icon5" src={Frame99} alt="icon5" />
              <div className="previews">
                <img src={preview} alt="previews" />
              </div>
            </div>
          </div>
          <div className="hero-image">
          <span className="swirly">
            <img src={Vector} alt="swirly" />
          </span>
          <img src={Frame103} alt="hero" className="hero-img"/>
          </div>
        </div>
      </div>
      <HeroFooter />
      <AboutUs />
      <Courses />
      <Testimonial />
      <Community />
      <Footer />
    </main>
  );
};

export default Hero;
