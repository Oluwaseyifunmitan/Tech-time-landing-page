import React from "react";
import "./AboutUs.css";
import about from "../../assests/about.png";
import experience from "../../assests/experience.png";
import two from "../../assests/two.png";
import one from "../../assests/one.png";
import affordable from "../../assests/affordable.png";

const AboutUs = () => {
  return (
    <section id="aboutus">
      <div className="aboutus-container">
        <div className="text--image">
          <h2 className="aboutus-text">
            This is why we are best
            <br /> from others
          </h2>
          <p className="aboutus-subtext">
            High-definition video is video of higher resolution and quality than
            standard <br />
            definition. while there’s no standard meaning for high definition,
            generally any <br /> standard video image
          </p>
          <div className="aboutus-image">
            <img src={about} alt="student" className="image-one" />
          </div>
        </div>
        <div className="aboutus-cards">
          <div className="cardstwo-four">
            <div className="cards">
              <img
                src={experience}
                alt="experience icon"
                className="card-logo"
              />
              <p className="card-title">Experienced Mentors</p>
              <p className="card-content">
                High-definition video is video of higher resolution and quality
                than standard definition. high-definition video is video of
                higher resolution and quality than standard definition.{" "}
              </p>
            </div>
            <div className="cards">
              <img src={one} alt="meeting icon" className="card-logo" />
              <p className="card-title">One-on-One Meetings</p>
              <p className="card-content">
                High-definition video is video of higher resolution and quality
                than standard definition. high-definition video is video of
                higher resolution and quality than standard definition.{" "}
              </p>
            </div>
          </div>
          <div className="cardstwo-four">
            <div className="cards">
              <img src={two} alt="meeting icon" className="card-logo" />
              <p className="card-title">
                <strong>One-On-One Meetings</strong>
              </p>
              <p className="card-content">
                High-definition video is video of higher resolution and quality
                than standard definition. high-definition video is video of
                higher resolution and quality than standard definition.{" "}
              </p>
            </div>
            <div className="cards">
              <img
                src={affordable}
                alt="affordable icon"
                className="card-logo"
              />
              <p className="card-title">Affordable Prices</p>
              <p className="card-content">
                High-definition video is video of higher resolution and quality
                than standard definition. high-definition video is video of
                higher resolution and quality than standard definition.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
