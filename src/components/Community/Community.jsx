import React from 'react'
import "./Community.css"
import Frame209 from "../../assests/Frame209.png"

const Community = () => {
  return (
    <section id="community">
    <div className='community-container'>
      <div className="community-heading">
        <p className='community-minitext'>Join Our Community</p>
        <h2 className="community-text">Are you  ready to connect with the future<br/> <span className='indented'>talent of the tech world</span></h2>
        <p className="community-subtext">Meet up with other techstars and grow together</p>
      </div>
      <div className="community-images">
        <img src={Frame209} alt="" className="community-people" />
      </div>
      <div className="community-button-section">
        <button className="community-button">Join Our Community</button>
      </div>
    </div>
    </section>
  )
}

export default Community