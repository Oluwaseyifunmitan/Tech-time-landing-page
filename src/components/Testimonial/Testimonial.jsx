import React from 'react'
import "./Testimonial.css"
import Frame176 from "../../assests/Frame176.png"
import Frame177 from "../../assests/Frame177.png"
import Frame178 from "../../assests/Frame178.png"
import Frame182 from "../../assests/Frame182.png"
import Frame183 from "../../assests/Frame183.png"
import Frame184 from "../../assests/Frame184.png"
import Frame185 from "../../assests/Frame185.png"

const Testimonial = () => {
  return (
    <section id="testimonial">
    <div className='testimonial-container'>
    <div className="testimonial-text-p">
      <h2 className='testimonial-text'>What Our Clients Are Saying</h2>
      <p className="testimonial-subtext">High-definition video is video of higher resolution and quality than
            standard definition. while<br/><span className="indent">there's no standard meaning for high
            definition, generally any standard video image</span></p>
      </div>
      <div className="testimonial-card-section">
        <div className="testimonial-card">
        <p className="testimonial-card-text">High-definition video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. build your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. high-defination video is video of higher resolution and quality than standard definition. build your future with our quality education. the best and largest all-in-one online tutoring platform in the world</p>
        <div className="testimonial-card-details">
        <img src={Frame176} alt="client" className="client-image" />
        <div className="client-details">
        <p className="clients-name">Bella Moon</p>
        <p className="clients-job">Product Designer</p>
        </div>
          </div>
        </div>
        <div className="testimonial-card">
        <p className="testimonial-card-text">High-definition video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. build your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. high-defination video is video of higher resolution and quality than standard definition. build your future with our quality education. the best and largest all-in-one online tutoring platform in the world</p>
        <div className="testimonial-card-details">
        <img src={Frame177} alt="client" className="client-image" />
        <div className="client-details">
        <p className="clients-name">Samuel Fortune</p>
        <p className="clients-job">Product Designer</p>
        </div>
          </div>
        </div>
        <div className="testimonial-card">
        <p className="testimonial-card-text">High-definition video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. build your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. high-defination video is video of higher resolution and quality than standard definition. build your future with our quality education. the best and largest all-in-one online tutoring platform in the world</p>
        <div className="testimonial-card-details">
        <img src={Frame178} alt="client" className="client-image" />
        <div className="client-details">
        <p className="clients-name">Bryce Jason</p>
        <p className="clients-job">Product Designer</p>
        </div>
          </div>
        </div>
      </div>
      <div className="testimonial-scroll-dots">
        <img src={Frame182} alt="" className="dots" />
        <img src={Frame183} alt="" className="dots" />
        <img src={Frame184} alt="" className="dots" />
        <img src={Frame185} alt="" className="dots" />
      </div>
    </div>
   
    </section>
  )
}

export default Testimonial