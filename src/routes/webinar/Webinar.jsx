import React from "react";
import { Container, Row, Col } from "reactstrap";
import webinarImg1 from "../../assets/images/web.png";
import webinarImg2 from "../../assets/images/graphics.png";
import webinarImg3 from "../../assets/images/ui-ux.png";
import "./webinar.css";
import WebinarCard from "./WebinarCard";

const webinarData = [
    {
      id: "01",
      title: "Web Design BootCamp-2022 for Beginners",
      lesson: 12,
      students: 12.5,
      rating: 5.9,
      imgUrl: webinarImg1,
    },
  
    {
      id: "02",
      title: "Professional Graphics Design, PhotoShop",
      lesson: 12,
      students: 12.5,
      rating: 5.9,
      imgUrl: webinarImg2,
    },
  
    {
      id: "03",
      title: "UI/UX BootCamp for Beginners in 2022",
      lesson: 12,
      students: 12.5,
      rating: 5.9,
      imgUrl: webinarImg3,
    }
  ];



const Webinar = () => {
  return (
    <div>
      <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-50">
                <h2>Our Popular Webinars</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  consequatur libero quod voluptatibus ullam quia quas, vitae
                  voluptatem recusandae reprehenderit!
                </p>
              </div>

              <div className="w-50 text-end">
                <button className="btn">See All</button>
              </div>
            </div>
          </Col>
          {webinarData.map((item) => (
            <Col lg="4" md="6" sm="6">
              <WebinarCard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
    </div>
  )
}

export default Webinar
