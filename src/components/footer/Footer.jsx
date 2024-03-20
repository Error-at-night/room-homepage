import { Col, Container, Row } from 'react-bootstrap'

import firstFooterImage from "../../images/image-about-dark.jpg"
import secondFooterImage from "../../images/image-about-light.jpg"

import "./footer.scss"

const Footer = () => {
  return (
    <Container fluid className="p-0 m-0 footerr">
        <Row className='p-0 m-0 gx-0 gy-0 justify-content-between'>
        <Col xs={12} sm={12} md={12} lg={4} className='p-0 m-0'>
          <img src={firstFooterImage} alt="footer_img" className="img-fluid"/>
        </Col>
        <Col xs={12} sm={12} md={12} lg={4} className='p-0 m-0 align-self-center img-fluid'>
          <div className='px-3 px-md-5 pt-5 pb-4'>
            <h5 className='mb-3'>ABOUT OUR FURNITURE</h5>
            <p>
              Our multifunctional collection blends design and function to suit your
              individual taste. Make each room unique, or pick a cohesive theme that 
              best express your interests and what inspires you. Find the furniture
              pieces you need, from traditional to contemporary styles or anything in
              between. Product specialists are available to help you create your dream
              space.
            </p>
          </div>
        </Col>
        <Col xs={12} sm={12} md={12} lg={4} className='p-0 m-0'>
          <img src={secondFooterImage} alt="footer_img" className="img-fluid"/>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer