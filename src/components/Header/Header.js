import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'

import './Header.css'

const Header = () => {
  return (
    <header>
      <Navbar className='nav-bg' variant='dark'>
        <Container>
          <Navbar.Brand href="/">Nice Store</Navbar.Brand>
          <Nav>
            <Nav.Link href="/cart"><i className='fa fa-shopping-cart'></i></Nav.Link>
            <Nav.Link href="/account"><i className='fa fa-user'></i></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header