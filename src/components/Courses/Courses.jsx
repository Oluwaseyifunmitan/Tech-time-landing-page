import React from "react";
import "./Courses.css";
import cardFour from "../../assests/cardFour.png"
import cardSeven from "../../assests/cardSeven.png"
import cardThree from "../../assests/cardThree.png"
import cardFive from "../../assests/cardFive.png"
import cardOne from "../../assests/cardOne.png"
import cardSix from "../../assests/cardSix.png"
import Frame165 from "../../assests/Frame165.png"
import Frame166 from "../../assests/Frame166.png"
import Frame167 from "../../assests/Frame167.png"
import Frame168 from "../../assests/Frame168.png"
import Frame169 from "../../assests/Frame169.png"
import Frame170 from "../../assests/Frame170.png"
import grade from "../../assests/grade.png"
import menu_book from "../../assests/menu_book.png"
import schedule from "../../assests/schedule.png"



const Courses = () => {
  return (
    <section id="coursespage">
      <div className="courses-container">
        <div className="courses-text-image">
          <h2 className="courses--text">Browse our popular courses</h2>
          <p className="courses-subtext">
            High-definition video is video of higher resolution and quality than
            standard definition. while<br/><span className="indent">there's no standard meaning for high
            definition, generally any standard video image</span> 
          </p>
          
          <ul className="courses-link">
            <button className="button-link">All Categories</button>
            <li className="links"><a href="/">Designs</a></li>
            <li className="links"><a href="/">Developement</a></li>
            <li className="links"><a href="/">Marketing</a></li>
          </ul>
        </div>
        <div className="courses-cards">
          <div className="card-section">
            <div className="cardimage">
            <img src={cardFour} alt=" a teacher teaching" className="imageone"/>
            </div>
            <div className="button-rating">
            <button className="design-button">Design</button>
            <p className="card-rating">4.7k <img src={grade} alt="" className="card-rating" />(32.7k+)</p> 
            </div>
            <p className="card-text">
              Introduction to user research in <br/>ux design
            </p>
            <div className="time-lessons">
            <p className="card-time">23hrs 50mins <img src={schedule} alt="" className="time-image" /></p>
            <p className="card-lessons">15 lessons <img src={menu_book} alt="" className="lesson-image" /></p>
            </div>
            <div className="card-details">
            <div className="name-photo">
              <img src={Frame165} alt="" className="card-photo" />
              <p className="card-name">Leonard Victor</p>
              </div>
              <p className="card-amount">$15.00</p>
            </div>
          </div>
          <div className="card-section">
          <div className="cardimage">
            <img src={cardSeven} alt="" className="imageone" />
            </div>
            <div className="button-rating">
            <button className="design-button">Marketing</button>
            <p className="card-rating">4.7k <img src={grade} alt="" className="card-rating" />(8.7k+)</p> 
            </div>
            <p className="card-text">
            Introduction to  new marketing<br/> audience 
            </p>
            <div className="time-lessons">
            <p className="card-time">23hrs 30mins <img src={schedule} alt="" className="time-image" /></p>
            <p className="card-lessons">22 lessons <img src={menu_book} alt="" className="lesson-image" /></p>
            </div>
            <div className="card-details">
            <div className="name-photo">
              <img src={Frame166} alt="" className="card-photo" />
              <p className="card-name">Jeffrey Williams</p>
              </div>
              <p className="card-amount">$32.00</p>
            </div>
          </div>
          <div className="card-section">
          <div className="cardimage">
            <img src={cardThree} alt="" className="imageone" />
            </div>
            <div className="button-rating">
            <button className="design-button">Developement</button>
            <p className="card-rating">4.7k <img src={grade} alt="" className="card-rating" />(12.7k+)</p> 
            </div>
            <p className="card-text">
            Introduction to HTML, CSS &<br/> Bootstrap
            </p>
            <div className="time-lessons">
            <p className="card-time">45hrs 50mins <img src={schedule} alt="" className="time-image" /></p>
            <p className="card-lessons">55 lessons <img src={menu_book} alt="" className="lesson-image" /></p>
            </div>
            <div className="card-details">
            <div className="name-photo">
              <img src={Frame167} alt="" className="card-photo" />
              <p className="card-name">Claretta Mason</p>
              </div>
              <p className="card-amount">$55.00</p>
            </div>
          </div>
          <div className="card-section">
          <div className="cardimage">
            <img src={cardFive} alt="" className="imageone" />
            </div>
            <div className="button-rating">
            <button className="design-button">Developement</button>
            <p className="card-rating">4.7k <img src={grade} alt="" className="card-rating" />(32.7k+)</p> 
            </div>
            <p className="card-text">
            Introduction to javascript, git &<br/> GitHub
            </p>
            <div className="time-lessons">
            <p className="card-time">30hrs 50mins <img src={schedule} alt="" className="time-image" /></p>
            <p className="card-lessons">32 lessons <img src={menu_book} alt="" className="lesson-image" /></p>
            </div>
            <div className="card-details">
            <div className="name-photo">
              <img src={Frame168} alt="" className="card-photo" />
              <p className="card-name">Jessica Duke</p>
              </div>
              <p className="card-amount">$45.00</p>
            </div>
          </div>
          <div className="card-section">
          <div className="cardimage">
            <img src={cardOne} alt="" className="imageone" />
            </div>
            <div className="button-rating">
            <button className="design-button">Marketing</button>
            <p className="card-rating">4.7k <img src={grade} alt="" className="card-rating" />(4.7k+)</p> 
            </div>
            <p className="card-text">
            Introduction to outroom <br/> marketing analysis
            </p>
            <div className="time-lessons">
            <p className="card-time">33hrs 50mins <img src={schedule} alt="" className="time-image" /></p>
            <p className="card-lessons">26 lessons <img src={menu_book} alt="" className="lesson-image" /></p>
            </div>
            <div className="card-details">
            <div className="name-photo">
              <img src={Frame169} alt="" className="card-photo" />
              <p className="card-name">Samuel Jacobs</p>
              </div>
              <p className="card-amount">$25.00</p>
            </div>
          </div>
          <div className="card-section">
          <div className="cardimage">
            <img src={cardSix} alt="computer" className="imageone" />
            </div>
            <div className="button-rating">
            <button className="design-button">Marketing</button>
            <p className="card-rating">4.7k <img src={grade} alt="" className="card-rating" />(15.7k+)</p> 
            </div>
            <p className="card-text">
            Introduction to live  marketing <br/>analysis
            </p>
            <div className="time-lessons">
            <p className="card-time">23hrs 50mins <img src={schedule} alt="" className="time-image" /></p>
            <p className="card-lessons">10 lessons <img src={menu_book} alt="" className="lesson-image" /></p>
            </div>
            <div className="card-details">
              <div className="name-photo">
              <img src={Frame170} alt="" className="card-photo" />
              <p className="card-name">Adam Smith</p>
              </div>
              <p className="card-amount">$25.00</p>
            </div>
          </div>
        </div>
        <div className="card-course-button">
            <button className="card-button">Explore All Courses</button>
          </div>
      </div>
    </section>
  );
};

export default Courses;
