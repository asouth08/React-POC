import React from 'react';

import {NavLink} from 'react-router-dom';

import './Footer.scss';

import {Container, Row, Col, Nav} from '../BootstrapComponents/BootstrapComponents';

const Footer = function() {
    return (
        <footer>
            <Container>
                <Row>
                    <Col>
                        <p className="text-muted d-none d-md-flex justify-content-center">RealtyStore.com is the fastest growing, most trusted and secure provider of Foreclosure Listings in the nation.<br></br>We value and respect your privacy. For details, please review our Privacy Policy by clicking below.</p>
                        <Nav className="justify-content-center">
                            <Nav.Item>
                                <NavLink to="/" className="text-primary">Contact Us</NavLink>
                            </Nav.Item>
                            <Nav.Item>
                                <NavLink to="/" className="text-primary">Terms and Conditions</NavLink>
                            </Nav.Item>
                            <Nav.Item>
                                <NavLink to="/privacy-policy" className="text-primary">Privacy Policy</NavLink>
                            </Nav.Item>
                            <Nav.Item>
                                <NavLink to="/" className="text-primary">Do Not Sell My Info</NavLink>
                            </Nav.Item>
                        </Nav>
                        <p className="text-muted text-center">Copyright © 2020 RealtyStore Foreclosure Listings <br></br>
                        †The information contained on RealtyStore.com (the "Service") is for general information purposes only. Although RealtyStore.com has made reasonable efforts to place accurate info on the site, RealtyStore.com assumes no responsibility for errors or omissions in the contents of the Service. You should not rely on this information as a substitute for, not does it replace, professional advice and information from a real estate professional.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;