import Container from 'react-bootstrap/Container'

import "./layout.scss"

import SlideShow from "../components/slideShow/SlideShow"
import Footer from '../components/footer/Footer'


const Layout = () => {
  return (
    <Container fluid className="p-0 m-0 layout">
      <SlideShow/>
      <Footer/>
    </Container>
  );
}

export default Layout;