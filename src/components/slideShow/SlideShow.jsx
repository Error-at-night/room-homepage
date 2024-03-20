import { useState } from "react"

import { Col, Container, Row } from "react-bootstrap"

import NaviBar from "../navbar/NaviBar"

import "./slideShow.scss"

import firstImage from "../../images/desktop-image-hero-1.jpg"
import secondImage from "../../images/desktop-image-hero-2.jpg"
import thirdImage from "../../images/desktop-image-hero-3.jpg"
import angleRight from "../../images/icon-angle-right.svg"
import angleLeft from "../../images/icon-angle-left.svg"

import ArrowLongRightIcon from "@heroicons/react/24/solid/ArrowLongRightIcon"

const SlideShow = () => {

  const [slideIndex, setSlideIndex] = useState(1)

  function plusSlides(n) {
    setSlideIndex((prevIndex) => prevIndex + n > 3 ? 1 : prevIndex + n < 1 ? 3 : prevIndex + n)
  }

  return (
    <Container fluid className="p-0 m-0 slideShow">
      <div style={slideIndex === 1 ? { display: "block" } : { display: "none" }}>
        <Row className="align-items-between gx-0">
          <Col xs={12} sm={12} md={12} lg={12} xl={7} className="mobileRelative">
            <div className="navAbsolute">
              <NaviBar/>
            </div>
            <div>
              <div>
                <img src={firstImage} alt="slide_img" className="img-fluid"/>
              </div>
              <div className='d-xl-none mobileButtons'>
                <button title="Previous" onClick={() => plusSlides(-1)}>
                  <img src={angleLeft} alt="angle_left"/>
                </button>
                <button title="Next" onClick={() => plusSlides(1)}>
                  <img src={angleRight} alt="angle_right"/>
                </button>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={12} xl={5} className='relative d-flex'>
            <div className="align-self-center">
              <div className="mt-4 mt-xl-0 mb-4 px-3 px-md-5">
                <h1 className="mb-4 mb-xl-3">Discover innovative ways to decorate</h1>
                <p>We provide unmatched quality, comfort, and style for property owners across
                  the country. Our experts combine form and function in bringing your vision to life.
                  Create a room in your own style with our collection and make your property a reflection
                  of you and what you love.
                </p>
                <button className="shopNow d-flex align-items-center">
                  <span className="span">SHOP NOW</span>
                  <ArrowLongRightIcon width={35} className="ms-4"/>
                </button>
              </div>
              <div className='buttons d-none d-xl-flex'>
                <button title="Previous" onClick={() => plusSlides(-1)}>
                  <img src={angleLeft} alt="angle_left"/>
                </button>
                <button title="Next" onClick={() => plusSlides(1)}>
                  <img src={angleRight} alt="angle_right"/>
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      {/* second row */}
      <div style={slideIndex === 2 ? { display: "block" } : { display: "none" }}>
        <Row className="align-items-between gx-0">
          <Col xs={12} sm={12} md={12} lg={12} xl={7} className="mobileRelative">
            <div className="navAbsolute">
              <NaviBar/>
            </div>
            <div>
              <div>
                <img src={secondImage} alt="slide_img" className="img-fluid"/>
              </div>
              <div className='d-xl-none mobileButtons'>
                <button title="Previous" onClick={() => plusSlides(-1)}>
                  <img src={angleLeft} alt="angle_left"/>
                </button>
                <button title="Next" onClick={() => plusSlides(1)}>
                  <img src={angleRight} alt="angle_right"/>
                </button>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={12} xl={5} className='relative d-flex'>
            <div className="align-self-center">
              <div className='mt-4 mt-xl-0 mb-4 px-3 px-md-5'>
                <h1 className="mb-4 mb-xl-3">We are available all across the globe</h1>
                <p>With stores all over the world, it's easy for you to find furniture for your
                  home or place of business. Locally, we're in most major cities throughout the 
                  country. Find the branch nearest you using our store locator. Any question? Don't
                  hesitate to contact us today.
                </p>
                <button className="shopNow d-flex align-items-center">
                  <span className="span">SHOP NOW</span>
                  <ArrowLongRightIcon width={35} className="ms-4"/>
                </button>
              </div>
              <div className='buttons d-none d-xl-flex'>
                <button title="Previous" onClick={() => plusSlides(-1)}>
                  <img src={angleLeft} alt="angle_left"/>
                </button>
                <button title="Next" onClick={() => plusSlides(1)}>
                  <img src={angleRight} alt="angle_right"/>
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      {/* third row */}
      <div style={slideIndex === 3 ? { display: "block" } : { display: "none" }}>
        <Row className="align-items-between gx-0">
          <Col xs={12} sm={12} md={12} lg={12} xl={7} className="mobileRelative">
            <div className="navAbsolute">
              <NaviBar/>
            </div>
            <div>
              <div>
                <img src={thirdImage} alt="slide_img" className="img-fluid"/>
              </div>
              <div className='d-xl-none mobileButtons'>
                <button title="Previous" onClick={() => plusSlides(-1)}>
                  <img src={angleLeft} alt="angle_left"/>
                </button>
                <button title="Next" onClick={() => plusSlides(1)}>
                  <img src={angleRight} alt="angle_right"/>
                </button>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={12} xl={5} className='relative d-flex'>
            <div className="align-self-center">
              <div className='mt-4 mt-xl-0 mb-4 px-3 px-md-5'>
                <h1 className="mb-4 mb-xl-3">Manufactured with the best materials</h1>
                <p>Our modern furniture store provide a high level of quality. Our Company has invested
                  in advanced technology to ensure that every product is made as perfect and as consistent
                  as possible. With three decades of experience in this industry, we understand what customers
                  want for their home and office.
                </p>
                <button className="shopNow d-flex align-items-center">
                  <span className="span">SHOP NOW</span>
                  <ArrowLongRightIcon width={35} className="ms-4"/>
                </button>
              </div>
              <div className='buttons d-none d-xl-flex'>
                <button title="Previous" onClick={() => plusSlides(-1)}>
                  <img src={angleLeft} alt="angle_left"/>
                </button>
                <button title="Next" onClick={() => plusSlides(1)}>
                  <img src={angleRight} alt="angle_right"/>
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  )
}

export default SlideShow