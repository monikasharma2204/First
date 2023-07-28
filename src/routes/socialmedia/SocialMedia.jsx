import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
function SocialMedia(){ 

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2
      }
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};
  return( 
   
    
    <div className='carousel'>
          <h2 className='tag'>Join a community of over 25k college students</h2>
    <Slider {...settings}>
    <div className="box">
      <img src='short-2.gif' alt="" />
    </div>
    <div className="box">
    <img src='short-3.gif' alt="" />
    </div>
    <div className="box">
    <img src='short-4.gif' alt="" />
    </div>
    <div className="box">
    <img src='short-5.gif' alt="" />
    </div>
    <div className="box">
    <img src='short-6.gif' alt="" />
    </div>
    <div className="box">
    <img src='short-7.gif' alt="" />
    </div>
    <div className="box">
    <img src='short-8.gif' alt="" />
    </div>
    <div className="box">
    <img src='short-9.gif' alt="" />
    </div>
    </Slider>
    
   </div>
 
   
  )
}



export default SocialMedia
