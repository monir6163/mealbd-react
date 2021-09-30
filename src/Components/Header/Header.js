import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
    return (
        <Navbar className="fs-5 fw-bold" bg="light" expand="lg">
            <Container fluid>
                <LinkContainer to="/">
                    <Navbar.Brand href="#">Meal-DB</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto ms-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <LinkContainer to="/home" activeStyle={{
                            fontWeight: "bold",
                            color: "red"
                        }}>
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/resturent" activeStyle={{
                            fontWeight: "bold",
                            color: "red"
                        }}>
                            <Nav.Link>Resturent</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/about" activeStyle={{
                            fontWeight: "bold",
                            color: "red"
                        }}>
                            <Nav.Link>About</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/contact" activeStyle={{
                            fontWeight: "bold",
                            color: "red"
                        }}>
                            <Nav.Link>Contact</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;