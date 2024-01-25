import React from 'react'
import { Badge } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Header() {

  const wishlistArray = useSelector((state) => state.wishlistReducer);
  const cartlist = useSelector((state) => state.cartReducer)

  return (
    <>

      <Navbar expand="lg" className="bg-primary position-fixed top-0 w-100" style={{ zIndex: "1" }}>
        <Container>
          <Navbar.Brand href="#home">
            <img height={'40px'} className='me-3' src="https://static.vecteezy.com/system/resources/previews/000/485/988/original/cart-icon-design-vector.jpg" alt="" />
            E KART</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">

              <Nav.Link className='btn border rounded me-3'><Link to={'/wishlist'} style={{ color: "black", textDecoration: "none" }}>Wish List<Badge>{wishlistArray.length}</Badge></Link></Nav.Link>
              <Nav.Link className='btn border rounded' style={{ width: "84px"}}><Link to={'/cart'} style={{color: "black", textDecoration: "none"}} >Cart<Badge bg="secondary">{cartlist.length}</Badge></Link></Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header