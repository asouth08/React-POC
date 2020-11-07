import React from 'react';

import Navigation from '../../Components/Navigation/Nav';
import Footer from '../../Components/Footer/Footer';
import PrivacyContent from '../../Components/PolicyContent/PrivacyContent';

const PrivacyPolicy = () => {
    return ( 
        <div>
            <Navigation></Navigation>
            <PrivacyContent></PrivacyContent>
            <Footer></Footer>
        </div>
    );
}
 
export default PrivacyPolicy;