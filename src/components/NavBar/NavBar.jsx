import React,{useState} from "react";
import "./NavBar.css";
import techtime from "../../assests/techtime.svg";
import {FaBars} from "react-icons/fa"
import {ImCross} from "react-icons/im"

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };
  return (
    <header id="header">
      <nav id="header__main-nav">
        {/* <div class="header__main-nav--hamburger" onClick={handleClick}>
          <div className="line line-1"></div>
          <div className="line line-2"></div>
          <div className="line line-3"></div>
        </div> */}
        

       <div className="logo">
          <img src={techtime} alt="logo" />
        </div>
        <div className= "header__main-navbar">
            <ul className={nav? "header-menu-icon" :"header__main-nav--links"} onClick={handleClick}>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="#aboutus">About us</a>
              </li>
              <li>
                <a href="#coursespage">Courses</a>
              </li>
              <li>
                <a href="#testimonial">Testimonial</a>
              </li>
              <li>
                <a href="#community">Community</a>
              </li>
              <button className="enroll-button">Enroll Now</button>
            </ul>
            
          
            <button className="menu-icon" onClick={handleClick}>  {nav ? <ImCross/> :<FaBars />}</button>
          </div>
       
      </nav>
    </header>
  );
};

export default NavBar;
