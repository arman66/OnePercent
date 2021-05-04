import React from 'react'
import {Container, Navbar, Nav} from 'react-bootstrap'

const Header = () => {
    return (
        <header>
                <Navbar bg="dark" expand="lg" collapseOnSelect>
                <Container>

                <Navbar.Brand href="/">One Percent</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                    <Nav.Link href="#home">About Us</Nav.Link>
                    <Nav.Link href="/login"><i className= "fas fa-user"></i> Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
           
                </Container>
                </Navbar>

         </header>
    )
}

export default Header
