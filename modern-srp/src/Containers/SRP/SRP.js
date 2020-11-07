import React from 'react';

import Navigation from '../../Components/Navigation/Nav';
import Jumbotron from '../../Components/Jumbotron/Jumbotron';
import Footer from '../../Components/Footer/Footer';
import Listings from '../../Components/Listings/Listings';

const SRP = function() {
    return (
        <div>
            <Navigation></Navigation>
            <Jumbotron></Jumbotron>
            <Listings></Listings>
            <Footer></Footer>
        </div>
    )
}

export default SRP;