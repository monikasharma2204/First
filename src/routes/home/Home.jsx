import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FiArrowRight } from "react-icons/fi";
import CountUp from "react-countup";
import { Container, Row, Col } from "reactstrap";
//import aboutImg from "./images/Habout-us.png";


import "./home.css";

function Home() {
  
  return (
    <div className="home">

      <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src='image1.png'
        alt='...'
        
      >

      <div className="home-banner-container">
        <div className="home-bannerImage-container">
        </div>
        
        <div className="home-text-section">
          <h1 className="primary-heading">
         Live Webinar and Internships
          </h1>
          <p className="primary-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
          </p>
          <button className="secondary-button">
            Download Now  <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
        <img src='webinar.png' alt="" />
        </div>
      </div>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='image1.png'
        alt='...'
      >
       
        <div className="home-banner-container">
        <div className="home-bannerImage-container">
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
          Live  Workshops
          </h1>
          <p className="primary-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
          </p>
          <button className="secondary-button">
            Download Now <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
        <img src='workshop.png' alt="" />
        </div>
      </div>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='image1.png'
        alt='...'
      >
    
    
        <div className="home-banner-container">
        <div className="home-bannerImage-container">
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
          Competitions, Fests & more!
          </h1>
          <p className="primary-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
          </p>
          <button className="secondary-button">
            Download Now <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
        <img src='images3.png' alt="" />
        </div>
      </div>
      </MDBCarouselItem>
    </MDBCarousel>






    <section className="benefits-section">
      <div className="container">
        <h2>Why Choose MentorAide?</h2>
        <div className="benefits-grid">
          <div className="benefit">
            <img src="paperless.svg" alt="Paperless Process" />
            <h2>Expert guidance</h2>
            <p> Mentor Aide may provide access to career coaches or experts who can offer personalized guidance and advice based on their professional experience. They can help individuals navigate the job market, improve their resumes, refine their interview skills,
               and develop effective job search strategies.</p>
          </div>
          
          <div className="benefit">
            <img src="minimal-docs.svg" alt="Minimal Documentation" />
            <h3>Networking opportunities</h3>
            <p>The website may facilitate networking opportunities with other professionals,
               both within and outside of one's field. Networking can be crucial for discovering
                hidden job opportunities,
               gaining industry knowledge, and establishing valuable connections.</p>
          </div>
          <div className="benefit">
            <img src="simple-secure.svg" alt="Simple & Secure Process" />
            <h3>Confidence building</h3>
            <p>Through coaching and support, Mentor Aide could help individuals build confidence and improve their self-presentation
               skills. This can be especially valuable during interviews, negotiations, and when pursuing 
               career advancement opportunities.</p>
          </div>
          <div className="benefit">
            <img src="customer-support.svg" alt="24/7 Customer Support" />
            <h3>24/7 Customer Support</h3>
            <p>We're  round the clock. Get prompt assistance whenever you need it.</p>
          </div>
          </div>
      </div>
    </section>



    <section>
      <Container className='container'>
        <Row>
          <Col lg="6" md="6">
            <div className="about__img">
              <img src='about-us.png' alt="" className="w-100" />
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__content">
              <h2>About Us</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Excepturi cupiditate animi deserunt libero nesciunt corporis
                explicabo nobis ex quo molestiae!
              </p>

              <div className="about__counter">
                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={25} duration={2} suffix="K" />
                    </span>

                    <p className="counter__title">Completed Projects</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={12} duration={2} suffix="k" />
                    </span>

                    <p className="counter__title">Cutting-Edge Resources</p>
                  </div>
                </div>

                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={25} duration={2} suffix="k" />
                    </span>


                    <p className="counter__title">Customer Satisfaction</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={5} duration={2} suffix="K" />
                    </span>

                    <p className="counter__title">Transparent and Supportive Community</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      </section>
    </div>
  );
}

export default Home;

