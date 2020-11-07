import React from 'react';

import {Container, Row, Col} from '../BootstrapComponents/BootstrapComponents';

import './PrivacyContent.scss';

const PrivacyContent = () => {
    return ( 
        <div className="privacy-content w-100 bg-light">
            <Container>
                <Row>
                    <Col>
                        <div className="content clearfix no-gutters bg-white shadow">
                            <div className="bg-primary">&nbsp;</div>
                            <div className="main-content">
                                <h1 className="lead text-uppercase">Privacy Policy</h1>
                                <p className="mb-3">
                                    <strong>Privacy Statement:</strong><br/>
                                    We have developed this Privacy Policy to inform you of the data gathering and dissemination practices applicable to our web site ("Site"). By
                                    visiting, registering or using services obtained through our Site, you agree to the terms of this Privacy Policy.  If you do not agree with
                                    any terms of this Policy, please do not use or submit any personal information to this Site.
                                </p>

                                <p className="mb-3">
                                    <strong>RealtyStore.com Privacy Pledge:</strong><br/>
                                    We do not collect any personal information from you that you do not volunteer, and we are the sole owner of all information collected on this
                                    site. We fully disclose our privacy policy in this document. If you have any questions or comments, you are invited to contact us.
                                </p>

                                <p className="mb-3">
                                    <strong>Information We Collect:</strong><br/>
                                    We collect Personally Identifiable Information when you register to use this Site; when you use, participate or purchase products and services
                                    through this Site; and when you ask to be provided additional services. The type of personal information that we collect may include full name,
                                    email, telephone number, address, payment information, profession, company name, company website address, business telephone number and photo.
                                    This personal information is generally required if you wish to enroll or participate in our services. We may use, sell or distribute certain
                                    individual personal information to other companies, including related interests or vendors so as to provide you with important offers. We may
                                    keep all information collected in accordance with this Privacy Policy indefinitely.
                                </p>
                                <p className="mb-3">
                                    When you register for the RealtyStore.com Professional Network ("REP"), certain information you post or share with third parties, such as
                                    personal information, comments, messages, photos, or other information,  will be shared with or accessible by other users who have access to
                                    the Network. All such sharing of information is done at your own risk. Please be aware that we may amend this policy at our sole discretion.
                                    You can check back to view changes at anytime by visiting the Site www.RealtyStore.com and clicking on the privacy link at the bottom of the page.
                                </p>
                                <p className="mb-3">
                                    <strong>Personally Identifiable Information:</strong><br/>
                                    Personally Identifiable Information refers to any information that can be used to identify you as an individual in any way. Enrollment in any
                                    RealtyStore.com service is contingent upon your agreeing to the Terms and Conditions of membership and providing Personally Identifiable
                                    Information as described above.
                                </p>
                                <p className="mb-3">
                                    <strong>Anti-SPAM Policy:</strong><br/>
                                    The RealtyStore.com marketing program has a strict policy regarding unsolicited email. Because email is an integral part of our services, your
                                    signup ensures that you'll receive information relative to your interests at the time of your enrollment from RealtyStore.com. If you later
                                    wish to cease participation in this portion of our services, you may do so at any time by clicking the unsubscribe link or button found within
                                    such message.
                                </p>
                                <p className="mb-3">
                                    Please note that opting not to receive email does not exempt you from receiving administrative and informational emails from us, which include
                                    but are not limited to, notices about membership status changes and alterations to our Terms.
                                </p>

                                <p className="mb-3">
                                    <strong>Aggregate Data:</strong><br/>
                                    We may, from time to time, contact you regarding opportunities that may be of interest to you. In that process, we may use a third party service
                                    provider to manage our database and communication system in order to send that correspondence to you on our behalf. If you respond to a
                                    communication to take advantage of an offer you may see or receive, you share your Personally Identifiable Information  with a third party. From
                                    time to time, we do share non-personally identifiable information collected in aggregate, anonymous form with third parties so that they may
                                    better evaluate what products and services are most appealing to different segments of our member base.
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
     );
}
 
export default PrivacyContent;