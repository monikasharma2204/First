import React from 'react'
import './workshop.css';
import { FiArrowRight } from 'react-icons/fi';
const WorkShop = () => {
  return (
   
    <><section id="workshop" className='workshop'>

      <div className="workshop-banner-container">
        <div className="workshop-image-section">
          <img src="workshop.png" alt="" />
        </div>

        <div className="workshop-text-section">
          <h1 className="primary-heading">Live WorkShop</h1>
          <p className="primary-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <button className="secondary-button">
            Download Now <FiArrowRight />
          </button>
        </div>
      </div>
    </section><div className="event-page">
        <div className="event-details">
          <h2>A meaningful place to hangout</h2>
          <p>Exchange ideas within a transparent community of college friends.</p>
          <p>Communicate with your college friends</p>

          <p>Post your college life experiences</p>
        </div>
        <div className="event-image">
          <img src="screen-1.png" alt="College Life" />
        </div>
      </div></>
              

  )
}

export default WorkShop
