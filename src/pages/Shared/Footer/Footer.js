import React from 'react';
import "./Footer.css"
import logo from "../../../images/shortImg/footerLogo.png"

const Footer = () => {
    return (
        <div>
            <footer className="footer-section">
        <div className="container">
            <div className="footer-cta pt-5 pb-5 pb-sm-4">
                <div className="row footerContacty">
                    <div className="col-xl-4 col-md-4 mb-sm-4">
                        <div className="single-cta">
                            <i className="fas fa-map-marker-alt"></i>
                            <div className="cta-text">
                                <h4>Find us</h4>
                                <span>1010 Avenue, sw 54321, chandigarh</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-sm-4">
                        <div className="single-cta">
                            <i className="fas fa-phone"></i>
                            <div className="cta-text">
                                <h4>Call us</h4>
                                <span>9876543210 0</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-sm-4">
                        <div className="single-cta">
                            <i className="far fa-envelope-open"></i>
                            <div className="cta-text">
                                <h4>Mail us</h4>
                                <span>mail@info.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-content pt-5 pb-5">
                <div className="row">
                    <div className="col-sm-12 col-md-6 mb-50">
                        <div className="footer-widget footerContent">
                            <div className="footer-logo">
                                <a href="index.html"><img src={logo} className="img-fluid" alt="logo"/></a>
                            </div>
                            <div className="footer-text">
                                <p>Photography transcends mere images, serving as a portal to memories, emotions, and stories. It's an art form that immortalizes moments, connecting people through shared experiences captured in frames.</p>
                            </div>
                            <div className="footer-social-icon">
                                <span>Follow us</span>
                                <a href="#"><i className="fab fa-facebook-f facebook-bg"></i></a>
                                <a href="#"><i className="fab fa-twitter twitter-bg"></i></a>
                                <a href="#"><i className="fab fa-google-plus-g google-bg"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 mb-30">
                        <div className="footer-widget text-center float-md-end">
                            <div className="footer-widget-heading">
                                <h3>Useful Links</h3>
                            </div>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Contact Us</a></li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                        <div className="copyright-text">
                            <p>Copyright &copy; 2024, All Right Reserved <a href="https://codepen.io/anupkumar92/">Photography</a></p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                        <div className="footer-menu">
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
        </div>
    );
};

export default Footer;