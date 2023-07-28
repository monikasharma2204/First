import React from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import "./footer.css"
import { RiTwitterLine, RiFacebookLine, RiInstagramLine, RiLinkedinLine } from 'react-icons/ri';




const footerQuickLinks = [
    {
      display: "Home",
      url: "#",
    },
    {
      display: "About US",
      url: "#",
    },
  
    {
      display: "Courses",
      url: "#",
    },
  
    {
      display: "Blog",
      url: "#",
    },
  ];
  
  const footerInfoLinks = [
    {
      display: "Privacy Policy",
      url: "#",
    },
    {
      display: "Membership",
      url: "#",
    },
  
    {
      display: "Purchases Guide",
      url: "#",
    },
  
    {
      display: "Terms of Service",
      url: "#",
    },
  ];
const Footer = () => {
  return (
    <footer className="footer">
    <Container>
      <Row>
        <Col lg="3" md="6" className="mb-4">
          <h2 className=" d-flex align-items-center gap-1">
            <i class="ri-pantone-line"></i> Learners.
          </h2>

          <div className="follows">
            <p className="mb-0">Follow us on social media</p>
            <div className="icon-container">
            <span>
              {" "}
              <a href="facebook.com">
              <i><RiInstagramLine /></i>
              </a>
            </span>

            <span>
              {" "}
              <a href="facebook.com">
              <i><RiLinkedinLine /></i>
              </a>
            </span>

            <span>
              {" "}
              <a href="facebook.com">
              <i><RiTwitterLine /></i>
              </a>
            </span>

            <span>
              {" "}
              <a href="facebook.com">
              <i><RiFacebookLine /></i>
              </a>
            </span>
          </div>
        </div>
        </Col>

        <Col lg="3" md="6" className="mb-4">
          <h6 className="fw-bold1">Explore</h6>
          <ListGroup className="link__list">
            {footerQuickLinks.map((item, index) => (
              <ListGroupItem key={index} className="border-0 ps-0 link__item">
                {" "}
                <a href={item.url}>{item.display}</a>
              </ListGroupItem>
            ))}
          </ListGroup>
        </Col>

        <Col lg="3" md="6" className="mb-4">
          <h6 className="fw-bold2">Information</h6>
          <ListGroup className="link__list">
            {footerInfoLinks.map((item, index) => (
              <ListGroupItem key={index} className="border-0 ps-0 link__item">
                {" "}
                <a href={item.url}>{item.display}</a>
              </ListGroupItem>
            ))}
          </ListGroup>
        </Col>

        <Col lg="3" md="6">
          <h6 className="fw-bold3">Get in Touch</h6>

          <p className='text'>Address: Sylhet, Bangladesh</p>
          <p className='text'> Phone: +88 0123456789 </p>
          <p className='text'>Email: example@gmail.com</p>
        </Col>
      </Row>
    </Container>
  </footer>

);
  }

export default Footer
