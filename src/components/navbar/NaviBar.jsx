import { useState } from "react"

import { Container, Nav, Navbar } from "react-bootstrap"

import toggle from "../../images/icon-hamburger.svg"

import "./naviBar.scss"

const NaviBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [navHeight, setNavHeight] = useState(0)
  
  const openNav = () => {
    setIsNavOpen((prevValue) => !prevValue)
    setNavHeight(100)
  }
  
  const closeNav = () => {
    setIsNavOpen((prevValue) => !prevValue)
    setNavHeight(0)
  }

  return (
    <>
        <Navbar>
            <Container className="navContainer align-items-center">
                <button className="me-4 burger-nav" onClick={openNav}><img src={toggle} alt="hamburger"/></button>
                <Navbar.Brand href="#home" className="m-0 p-0 nav-link" style={{border: "none"}}><h2 className="me-5">room</h2></Navbar.Brand>
                <Navbar.Collapse id="mySidenav">
                    <Nav className="">
                    <Nav.Link to="#home" className="pt-4 me-3 nav-link" onClick={closeNav}>home</Nav.Link>
                    <Nav.Link to="#shop" className="pt-4 me-3 nav-link" onClick={closeNav}>shop</Nav.Link>
                    <Nav.Link to="#about" className="pt-4 me-3 nav-link" onClick={closeNav}>about</Nav.Link>
                    <Nav.Link to="#contact" className="pt-4 nav-link" onClick={closeNav}>contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <div className={`overlay overlay-link ${isNavOpen ? 'open' : ''}`} style={{height: navHeight}}>
            <Navbar className="overlay-content justify-content-around">
            <Nav.Link className="closebtn" onClick={closeNav} style={{fontSize: "40px"}}>&times;</Nav.Link>
            <Nav.Link to="#home" onClick={closeNav}>home</Nav.Link>
            <Nav.Link to="#shop" onClick={closeNav}>shop</Nav.Link>
            <Nav.Link to="#about" onClick={closeNav}>about</Nav.Link>
            <Nav.Link to="#contact" onClick={closeNav}>contact</Nav.Link>
            </Navbar>
        </div>
    </>
  )
}

export default NaviBar