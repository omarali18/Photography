import React from 'react';
import "./AllCards.css"
import img_1 from "../../../images/gallery/home_t_1.webp"
import img_2 from "../../../images/gallery/home_t_2.jpg"

const AllCards = () => {
    return (
        <div>
            <section class="d-flex flex-wrap justify-content-center">
            <div className="second hero">
                <img className="hero-profile-img" src={img_1} alt=""/>
                <div className="hero-description-bk"></div>
                <div className="hero-logo">
                    <img src={img_1} alt=""/>
                </div>
                <div className="hero-description">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div  className="hero-date">
                    <p>20.02.2019</p>
                </div>
                {/* <div className="hero-btn">
                    <a href="#">Learn More</a>
                </div> */}
            </div>
            <div className="second hero">
                <img className="hero-profile-img" src={img_2} alt=""/>
                <div className="hero-description-bk"></div>
                <div className="hero-logo">
                    <img src={img_2} alt=""/>
                </div>
                <div className="hero-description">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div  className="hero-date">
                    <p>20.02.2019</p>
                </div>
                {/* <div className="hero-btn">
                    <a href="#">Learn More</a>
                </div> */}
            </div>
            <div className="second hero">
                <img className="hero-profile-img" src={img_1} alt=""/>
                <div className="hero-description-bk"></div>
                <div className="hero-logo">
                    <img src={img_1} alt=""/>
                </div>
                <div className="hero-description">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div  className="hero-date">
                    <p>20.02.2019</p>
                </div>
                {/* <div className="hero-btn">
                    <a href="#">Learn More</a>
                </div> */}
            </div>
            <div className="second hero">
                <img className="hero-profile-img" src={img_2} alt=""/>
                <div className="hero-description-bk"></div>
                <div className="hero-logo">
                    <img src={img_2} alt=""/>
                </div>
                <div className="hero-description">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div  className="hero-date">
                    <p>20.02.2019</p>
                </div>
                {/* <div className="hero-btn">
                    <a href="#">Learn More</a>
                </div> */}
            </div>
            <div className="second hero">
                <img className="hero-profile-img" src={img_2} alt=""/>
                <div className="hero-description-bk"></div>
                <div className="hero-logo">
                    <img src={img_2} alt=""/>
                </div>
                <div className="hero-description">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div  className="hero-date">
                    <p>20.02.2019</p>
                </div>
                {/* <div className="hero-btn">
                    <a href="#">Learn More</a>
                </div> */}
            </div>
            </section>
        </div>
    );
};

export default AllCards;