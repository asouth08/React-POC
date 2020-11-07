import React from 'react';

import {Container, Navbar, Nav, Button} from '../BootstrapComponents/BootstrapComponents';

import './Nav.scss';

const Navigation = function() {
    return (
        <Navbar bg="white" className="main-nav">
            <Container>
                <Navbar.Brand href="#"></Navbar.Brand>
                <Navbar.Collapse className="justify-content-md-end">
                    <Nav className="d-none d-md-flex">
                        <Nav.Link href="https://www.develop.realtystore.com/Membersite/?from=banner">
                            <i className="fa fa-user"></i> Member Sign-in
                        </Nav.Link>
                    </Nav>
                    <Nav className="d-md-none">
                        <span className="d-inline d-md-none mobile-h1 text-primary w-100 text-left"><span className="d-inline d-md-none">0 matching listings</span></span>
                        <Button href="https://www.develop.realtystore.com/signup.html?from=banner" variant="outline-dark" size="sm" className="d-md-none align-self-end join-btn">Join</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation;