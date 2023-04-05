import React from "react";
import "./Footer.css";
import techtime from "../../assests/techtime.svg";
import facebook from "../../assests/facebook.png";
import twitter from "../../assests/twitter.png";
import youtube from "../../assests/youtube.png";
import instagram from "../../assests/instagram.png";
import discord from "../../assests/discord.png";

const Footer = () => {
  return (
    <section id="footer">
      <div className="faq-container">
        <div className="faq-text">
          <h2 className="faq-maintext">Frequently Asked Questions</h2>
          <p className="faq-subtext">
            High-definition video is video of higher resolution and quality than
            standard definition. while
            <br />
            <span className="indent">
              there's no standard meaning for high definition, generally any
              standard video image
            </span>
          </p>
        </div>

        <div className="faq-body">
          <h3 className="faq-bodytext">
            Is there a free trial available?{" "}
            <span className="faq-minus">-</span>
          </h3>

          <p className="faq-body-subtext">
            High-definition video is video of higher resolution and quality than
            standard definition. high-defination video is video of higher
            resolution and <br />
            quality than standard definition. build your future with our quality
            education. the best and largest all-in-one online tutoring platform
            in the
            <br /> world definition.{" "}
          </p>
          <hr className="faq-hr" />
          <h3 className="faq-textplus">
            Can i change my plan later? <span className="faq-plus">+</span>
          </h3>
          <hr className="faq-hr" />
          <h3 className="faq-textplus">
            Are the courses lifetime? <span className="faq-plus">+</span>
          </h3>
          <hr className="faq-hr" />
          <h3 className="faq-textplus">
            Do i get certified after taking courses?{" "}
            <span className="faq-plus">+</span>
          </h3>
          <hr className="faq-hr" />
          <h3 className="faq-textplus">
            How do i reach out to mentors?? <span className="faq-plus">+</span>
          </h3>
          <hr className="faq-hr" />
          <h3 className="faq-textplus">
            Do we get job ready after taking courses?{" "}
            <span className="faq-plus">+</span>
          </h3>
          <hr className="faq-hr" />
        </div>
      </div>
      <div className="footer-container">
        <div className="footer-divs">
      <div className="first-div">
        <img src={techtime} alt="" className="footerlogo" />
        <p className="first-text">
          Reach out to us on any of our social <br/>media networks
        </p>
        <div className="socialmedia-icons">
          <img src={facebook} alt="" className="footer-icons" />
          <img src={twitter} alt="" className="footer-icons" />
          <img src={youtube} alt="" className="footer-icons" />
          <img src={instagram} alt="" className="footer-icons" />
          <img src={discord} alt="" className="footer-icons" />
        </div>
      </div>
      <div className="second-div">
        <h3 className="footer-text">Useful Links</h3>
        <ul className="footer-links">
          <li>
            <a href="/" className="anchor">Home</a>
          </li>
          <li>
            <a href="#aboutus" className="anchor">About us</a>
          </li>
          <li>
            <a href="#coursespage" className="anchor">Courses</a>
          </li>
          <li>
            <a href="#testimonial" className="anchor">Testimonials</a>
          </li>
          <li>
            <a href="#community" className="anchor">Community</a>
          </li>
        </ul>
      </div>
      <div className="third-div">
        <h3 className="footer-text">Community</h3>
        <ul className="footer-community">
          <li>Help centers</li>
          <li>Partners</li>
          <li>Suggestion</li>
          <li>Blog</li>
          <li>Newsletter</li>
        </ul>
      </div>
      <div className="fourth-div">
        <h3 className="footer-text">Susbscribe Us</h3>
        <input type="text" />
        <button className="footer-button">Send Message</button>
      </div>
      </div>
      </div>
    </section>
  );
};

export default Footer;
