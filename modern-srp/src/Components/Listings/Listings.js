import React, { Component } from 'react';
import { connect } from 'react-redux';

import {Container, Row, Col, Spinner} from '../BootstrapComponents/BootstrapComponents';
import Listing from './Listing/Listing';
import * as actionTypes from '../../store/actions/search';

import './Listings.scss';

class Listings extends Component {
    componentDidMount() {
        this.props.onInitProperties();
    }
    render () {
        const properties = this.props.props;

        let listings;
        
        if (properties == null) {
            listings = (
                <Spinner animation="border" role="status" className="text-center m-auto">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            )
        } else {
            listings = properties.map((key, index) => (
                <Listing key={index}  propInfo={key}></Listing>
            ));
        }

        return ( 
            <div className="listings bg-light">
                <Container>
                    <Row className="d-none d-md-flex">
                        <Col className="listing-results text-left">
                            <p className="text-muted">0 listings in and around {this.props.search == '' ? '91372' : this.props.search}</p>
                        </Col>
                    </Row>
                    <Row>
                        {listings}
                    </Row>
                </Container>
            </div>
         );
    }
}

const mapStateToProps = (state) => {
    return {
        search: state.search.searchLocation,
        props: state.search.properties,
        err: state.search.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onInitProperties: () => dispatch(actionTypes.initProperties())
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Listings);