import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'

import { Container, Navbar, Nav } from 'react-bootstrap'

import './Header.css'

const Header = () => {
  return (
    <header>
      <Navbar className='nav-bg' variant='dark'>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Nice Store</Navbar.Brand>
          </LinkContainer>
          <Nav>
            <LinkContainer to="/cart">
              <Nav.Link href="/cart"><i className='fa fa-shopping-cart'></i></Nav.Link>
            </LinkContainer>
            <LinkContainer to="/account">
              <Nav.Link href="/account"><i className='fa fa-user'></i></Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header