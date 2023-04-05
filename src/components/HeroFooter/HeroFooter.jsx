import React from 'react'
import "./HeroFooter.css"
import zoom from "../../assests/zoom.png";
import stripe from "../../assests/stripe.png";
import monday from "../../assests/Monday.png";
import dropbox from "../../assests/Dropbox.png";
import slack from "../../assests/slack.png";
import student1 from "../../assests/student1.png";
import student2 from "../../assests/student2.png";
import antenna from "../../assests/antenna.png"
import volume from "../../assests/volume_up.png"
import autoplay from "../../assests/autoplay.png"
import description from "../../assests/description.png"
import Frame113 from "../../assests/Frame113.png"

const HeroFooter= () => {
  return (
    <section id="mainfooter">
    <div className='footerIcons'>
<img src={zoom} alt="zoom icon" className='footericon'/>
<img src={stripe} alt="stripe icon" className='footericon'/>
<img src={monday} alt="monday.com icon" className='footericon'/>
<img src={slack} alt="slack icon" className='footericon'/>
<img src={dropbox} alt="dropbox icon" className='footericon'/>
    </div>
    <div className='online'>
        <div className='ad'>
        <h2 className='audio-text'>High quality video, audio <br/>& live classes</h2>
        <p className='audio-subtext'>High-definition video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image</p>
        <div className='view__course-button'>
        <button className='course-button'>View Courses</button>
        </div>
        <div className='classM'>
            <div className='first-button'>
        <button className='button-courses'>Audio Classes <img className="audio_icons" src={volume} alt="volumeicon"/></button>
        <button className='button-courses'>Recorded Classes <img className="audio_icons"src={autoplay} alt="antenna icon"/></button>
        </div>
        <div className='second-button'>
        <button className='button-courses'>Live Classes<img className="audio_icons"src={antenna} alt="live icon"/></button>
        <button className='button-courses'>50+ Notes <img className="audio_icons"src={description} alt="note icon"/> </button>
        </div>
        </div>
        </div>
        
        
        <div className='student-images'>
        
        <img className="student-one" src={student1} alt="student studying"/>
        <span className="notification-bar">
          <img src={Frame113} alt="" className="notification" />
          </span>
        <img className="student-two" src={student2} alt="student studying"/>
        </div>
    </div>
    </section>
  )
}

export default HeroFooter