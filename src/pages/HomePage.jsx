import { Container, Row, Col } from "react-bootstrap";
import HeroImage from "../assets/img/HeroImage.png"
import GoogleImage from "../assets/img/logos_google.png"
import TrelloImage from "../assets/img/logos_trello.png"
import MondayImage from "../assets/img/logos_monday.png"
import NotionImage from "../assets/img/logos_notion.png"
import SlackImage from "../assets/img/logos_slack.png"

import { services, calculation, portfolio, testimonial } from "../data";


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';




const Homepage = () => {
  return (
    <div className="homepage">
      <header>
        <Container>
          <Row className="header-box d-flex align-items-center">
            <Col lg="6" className="pt-5">
              <h1 className="fw-bold mb-4 animate__animated animate__fadeInLeft" style={{ animationDelay: '0.3s' }}>Increase Your  Customers Loyalty and Satisfaction</h1>
              <p className="mb-4 animate__animated animate__fadeInLeft" style={{ animationDelay: '0.3s' }}>We help businesses like yours earn more customers, standout from competitors, make more money</p>
              <button className="btn-started btn-lg rounded-1 me-2 mb-xs-0 mb-2 animate__animated animate__fadeInLeft" style={{ animationDelay: '0.3s' }}>Get Started</button>
            </Col>
            <Col lg="6">
              <img src={HeroImage} alt="hero-img" className="img-fluid animate__animated animate__fadeInUp" style={{ animationDelay: '0.3s' }}/>
            </Col>
          </Row>
        </Container>
      </header>
      <div className="brand-logo">
        <Container>
          <Row>
            <Col className="d-flex justify-content-between animate__animated animate__fadeInUp" style={{ animationDelay: '0.3s' }}>
              <img src={GoogleImage} alt="hero-img" className="brand-img img-fluid"/>
              <img src={TrelloImage} alt="trello-img" className="brand-img img-fluid"/>
              <img src={MondayImage} alt="monday-img" className="brand-img img-fluid"/>
              <img src={NotionImage} alt="notion-img" className="brand-img img-fluid"/>
              <img src={SlackImage} alt="slack-img" className="brand-img img-fluid"/>
            </Col>
          </Row>
        </Container>
      </div>
      <div class="background-div"></div>
      <div className="whatwedo">
        <Container>
          <Row>
            <Col data-aos="fade-right" data-aos-duration="400" data-aos-delay="400">
            <h6 className="mb-3">WHAT WE DO</h6>
            <h4>We provide the Perfect Solution <br /> to your business growth</h4>
            </Col>
          </Row>
          <Row>
            {services.map((service) => (
              <Col key={service.id} className="p-5" data-aos="fade-up" data-aos-duration="500" data-aos-delay="500">
                <img src={service.image} alt="" className="p-4 mb-4 rounded-4"/>
                <h5>{service.title}</h5>
                <p>{service.desc}</p>
                <p>Learn More  <i className="ms-2 fas fa-arrow-right"></i> </p>
              </Col>
            ))}
          </Row>
          <Row>
            {calculation.map((calcItem, index) => (
              <Col key={calcItem.id} className="calculation-column ps-md-5 pe-md-5" data-aos="fade-up" data-aos-duration="500" data-aos-delay="500">
                <div className={`justify-content-center mx-auto text-center p-4`} style={{ backgroundColor: "white"}}>
                  <img src={calcItem.image} alt="" className="d-block mx-auto mb-3" style={{ backgroundColor: "" }} />
                  <p>{calcItem.title}</p>
                  <h2>{calcItem.total}</h2>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <div className="ourportfolio">
        <Container>
          <Row>
            <Col data-aos="fade-right" data-aos-duration="400" data-aos-delay="400">
            <h6 className="mb-3">OUR PORTFOLIO</h6>
            <h4>We provide the Perfect Solution <br /> to your business growth</h4>
            </Col>
          </Row>
          <Row className="d-flex flex-wrap">
            {portfolio.map((portfolio) => (
              <Col key={portfolio.id} className="col-lg-6 p-lg-5" data-aos="fade-right" data-aos-duration="500" data-aos-delay="500">
                <div className="mb-5">
                  <img src={portfolio.image} alt="portfolio-img" className="mb-5" style={{ width: "100%" }} />
                  <div>
                    <h5>{portfolio.title}</h5>
                    <p>{portfolio.desc}</p>
                  </div>
                </div>
                <div>
                  <img src={portfolio.image2} alt="portfolio-img" className="mb-5" style={{ width: "100%" }} />
                  <div>
                    <h5>{portfolio.title2}</h5>
                    <p>{portfolio.desc2}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <div className="testimonial">
        <Container>
          <Row>
            <Col className="judul-button d-flex align-items-center" data-aos="fade-right" data-aos-duration="400" data-aos-delay="400">
              <div>
                <h6 className="mb-3">TESTIMONIALS</h6>
                <h4>We provide the Perfect Solution <br /> to your business growth</h4>
              </div>
              <div className="arrow-button align-items-center">
                <button className="arrow-button me-2">
                  <i className="fas fa-chevron-left"></i>
                </button>
                <button className="arrow-button">
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>
            </Col>
          </Row>
          <Row className="d-flex flex-warp">
            <Col data-aos="fade-right" data-aos-duration="500" data-aos-delay="500">
              <Swiper
                slidesPerView={window.innerWidth > 992 ? 2.6 : 1}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                {testimonial.map((item) => (
                  <SwiperSlide key={item.id} className="mb-5">
                    <div className="card-box w-100">
                      <div className="isi-card">
                        <div className="p-3">
                          <p>{item.desc}</p>
                          <div className="people d-flex">
                            <img src={item.image} alt="testimonial-img" className="mb-3" style={{ backgroundColor : "#E6E4FF", 
                            borderRadius: "50%"}}/>
                            <div className="pt-2">
                              <h5>{item.name}</h5>
                              <p>{item.skill}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="subscribe">
        <Container>
          <Row>
            <Col className="text-center" data-aos="fade-up" data-aos-duration="500" data-aos-delay="500">
              <h6>SUBSCRIBE</h6>
              <h4>Subscribe To Get The Latest <br /> News About Us</h4>
              <p>Please Drop Your Email Below To Get Daily Update About What We Do</p>
              <form className="mx-auto" style={{ maxWidth: '700px' }}>
                <div className="input-group mb-3">
                  <input type="email" className="form-control" placeholder="Your Email Address" aria-label="Your Email Address" aria-describedby="subscribe-btn" />
                  <button className="btn-subscribe" type="submit" id="subscribe-btn">Subscribe</button>
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Homepage;