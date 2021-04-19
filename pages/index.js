import React from 'react';

function Index() {
    return (
        <>
            <header>
                <div className="container">
                    <div className="heading-wrapper">
                        <div className="row">
                            <div className="col-sm-6 col-md-6 col-lg-4">
                                <div className="info">
                                    <i className="icon ion-ios-location-outline"></i>
                                    <div className="right-area">
                                        <h5>Tevfik Sağlampaşa Sok. Nu. 3/36</h5>
                                        <h5>Eski Kuyumcular,Karesi,Balıkesir</h5>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6 col-md-6 col-lg-4">
                                <div className="info">
                                    <i className="icon ion-ios-telephone-outline"></i>
                                    <div className="right-area">
                                        <h5>850-885-0379 (1001)</h5>
                                        <h6>MON - FRI,9AM - 6PM</h6>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6 col-md-6 col-lg-4">
                                <div className="info">
                                    <i className="icon ion-ios-chatboxes-outline"></i>
                                    <div className="right-area">
                                        <h5>azizalkan@dadayazilim.com</h5>
                                        <h6>REPLY IN 24 HOURS</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <section className="intro-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-1 col-lg-2"></div>
                        <div className="col-md-10 col-lg-8">
                            <div className="intro">
                                <div className="profile-img"><img src="/images/azzlkn.jpg" alt="" width="100%"/></div>
                                <h2><b>Aziz ALKAN</b></h2>
                                <h4>FULL STACK DEVELOPER</h4>
                                <ul className="information">
                                    <li><b>BORN : </b>May 05, 1997</li>
                                    <li><b>EMAIL : </b><a
                                        href="mailto:azizalkan@dadayazilim.com">azizalkan@dadayazilim.com</a></li>
                                </ul>
                                <ul className="social-icons">
                                    <li><a href="https://www.linkedin.com/in/azzlkn" target="_blank"><i
                                        className="ion-social-linkedin"></i></a></li>
                                    <li><a href="https://www.instagram.com/azzlkn" target="_blank"><i
                                        className="ion-social-instagram"></i></a></li>
                                    <li><a href="https://www.facebook.com/AzzLkn" target="_blank"><i
                                        className="ion-social-facebook"></i></a></li>
                                    <li><a href="https://twitter.com/azzlkn" target="_blank"><i
                                        className="ion-social-twitter"></i></a></li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Index;
