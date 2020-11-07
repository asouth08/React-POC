import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/actions';

import './Jumbotron.scss';

import {Jumbotron, Container, Row, Col, Button, Form, Nav, InputGroup} from '../BootstrapComponents/BootstrapComponents';

class Jumbo extends Component {
    render () {
        const getSearchLocation = () => {
            const searchValue = document.querySelector('.form-control').value;
            this.props.onSearchLocation(searchValue)
        }
        return ( 
            <Jumbotron className="search-jumbo">
                <Container fluid>
                    <Row className="d-none d-md-flex">
                        <Col className="jumbotron-heading text-center">
                            <h1 className="font-weight-bold">Foreclosures available as low as $10,000</h1>
                            <h2>Hurry! You may never see prices this low again.</h2>
                        </Col>
                    </Row>
                    <Row className="d-none d-md-flex">
                        <Col>
                            <Form>
                                <Row className="justify-content-center">
                                    <Col xs={10} lg={7}>
                                        <InputGroup>
                                            <Form.Control placeholder='Enter ZIP or City, State' autcomplete="off" />
                                            <InputGroup.Append>
                                                <Button variant="primary" size="lg" className="rounded" onClick={getSearchLocation}>Search</Button>
                                            </InputGroup.Append>
                                        </InputGroup>
                                    </Col>
                                </Row>
                            </Form>
                        </Col>
                    </Row>
                    <Row className="d-flex d-md-none">
                        <Col className="d-flex justify-content-start mobile-refine-btns">
                            <Button variant="primary" className="font-weight-bold">
                                <span className="fa fa-play fa-flip-horizontal"></span> Back
                            </Button>
                            <Button variant="primary" className="font-weight-bold">Refine</Button>
                        </Col>
                        <Col className="mini-tabs d-flex justify-content-end">
                            <Nav>
                                <Nav.Item>
                                    <Nav.Link className="mini-tab-active text-primary position-relative">List View</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className="mini-tab-map position-relative">Map View</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
         );
    }
}

const mapStateToProps = (state) => {
    return {
        search: state.search.searchLocation
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSearchLocation: value => dispatch({type: actionTypes.SEARCH_LOCATION, value: value})
    }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(Jumbo);