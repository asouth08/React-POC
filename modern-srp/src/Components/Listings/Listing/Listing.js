import React from 'react';

import './Listing.scss';

import {Row, Col, Button, Card} from '../../BootstrapComponents/BootstrapComponents';

const Listing = (props) => {
    return ( 
        <Col md={6} lg={4} className="listing">
            <Card>
                <Card.Header>
                    <Row>
                        <Col md={{span: 4, order: 'last'}} className="text-right">
                            <p>
                                <a href="#" className="font-weight-bold text-decoration-none deal">{props.propInfo.propPrice}</a>
                            </p>
                            <p className="d-flex d-md-none text-highlight">
                                Register for Details
                            </p>
                        </Col>
                        <Col md={{span: 8, order: 'first'}} className="text-left">
                            <h3 className="d-none d-md-flex">
                                <a href="#" className="text-primary text-decoration-none">{props.propInfo.propSaleType}</a>
                            </h3>
                            <p>
                                <a href="#" className="text-decoration-none">{props.propInfo.propLocation}</a>
                            </p>
                        </Col>
                    </Row>
                </Card.Header>
                <div className="prop-img">
                    <Card.Img src={props.propInfo.propImg} />
                </div>
                <Card.Body>
                    <Row>
                        <Col xs={10} md={7} className="text-left">
                            <a href="#" className="text-decoration-none">
                                <h4>{props.propInfo.propType}</h4>
                                <p>{props.propInfo.propBed} Beds | {props.propInfo.propBaths} Baths | {props.propInfo.propSqft} sqft</p>
                            </a>
                            <h3 className="d-md-none">
                                <a href="#" className="text-primary text-decoration-none font-weight-bold">{props.propInfo.propSaleType}</a>
                            </h3>
                        </Col>
                        <Col xs={2} md={5}>
                            <Button variant="primary" size="sm" block className="font-weight-bold d-none d-md-block text-center">Get Details</Button>
                            <Button variant="secondary" className="font-weight-bold d-md-none border-0">
                                <span className="fa fa-chevron-right"></span>
                            </Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Col>
     );
}
 
export default Listing;