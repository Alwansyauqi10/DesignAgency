import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import logos from '../assets/img/logos.png';

const FooterComponents = () => {
  return (
    <div className="footer" data-aos="fade-up" data-aos-duration="500" data-aos-delay="500">
      <Container>
        <Row className="d-flex justify-content-between pt-5">
          <Col lg="3" className="mb-lg-0 mb-4">
            <img src={logos} alt="Design Agency Logo" className="mb-2" style={{ marginLeft: "-13px" }}/>
            <p className="desc mb-4">Some footer text about the Agency. Just a little description to help people understand you better</p>
            <div className="social mt-2">
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-linkedin-in"></i>
              <i className="fa-brands fa-instagram"></i>
            </div>
          </Col>
          <Col lg={{ span: 3, offset: 2 }} className="d-flex flex-column mb-lg-0 mb-4 pt-3">
            <h6 className="fw-bold pt-4 mb-2">Quick Links</h6>
            <Link to="/" className="quick-link mb-2">Home</Link>
            <Link to="/services" className="quick-link mb-2">Services</Link>
            <Link to="/portfolio" className="quick-link mb-2">Portfolio</Link>
            <Link to="/testimonial" className="quick-link mb-2">Testimonial</Link>
            <Link to="/contact" className="quick-link mb-2">Contact</Link>
          </Col>
          <Col lg="3" className="mb-lg-0 pt-2">
            <h6 className="fw-bold pt-4 mb-2">Address</h6>
            <p>Design Agency Head Office. <br />Airport Road <br />United Arab</p>
          </Col>
        </Row>
      </Container>
      <div className="copyright pt-5">
        <Container>
          <Row>
            <Col>
            <p>Copyright Design Agency 2022</p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default FooterComponents;