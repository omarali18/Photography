import React from 'react';
import "./ContactUs.css"
import Navbar from '../../Shared/Navbar/Navbar';
import Footer from '../../Shared/Footer/Footer';
// contact.bengalproduction@gmail.com
// book.bengalproduction@gmail.com
// Contact 4692430439, 4694634938

const ContactUs = () => {
    return (
        <div>
            <Navbar/>
            <section className='topSection'>
                <div id="container">
                <div id="first" className="element">
                <span className="contactTitle">Phone Number:</span>
                <span>+001 4692430439</span>
                <span>+001 4694634938</span>
                </div>
                <div id="second" className="element">
                <span className="contactTitle">Email us:</span>
                <span className='contactEmail'><a href="contact.bengalproduction@gmail.com">contact.bengalproduction@gmail.com</a></span>
                <span className='contactEmail'><a href="book.bengalproduction@gmail.com">book.bengalproduction@gmail.com</a></span>
                {/* <span>contact.bengalproduction@gmail.com</span>
                <span>book.bengalproduction@gmail.com</span> */}
                </div>
                <div id="third" className="element">
                <span className="contactTitle">Phone Number:</span>
                <span>+001 4692430439</span>
                <span>+001 4694634938</span>
                </div>
                </div>
            </section>
            <section id="contact">
            <div className="contact-box">
                <div className="contact-links">
                <h2>CONTACT</h2>
                <div className="links">
                    <div className="link">
                    <a><img src="https://i.postimg.cc/m2mg2Hjm/linkedin.png" alt="linkedin"/></a>
                    </div>
                    <div className="link">
                    <a><img src="https://i.postimg.cc/YCV2QBJg/github.png" alt="github"/></a>
                    </div>
                    <div className="link">
                    <a><img src="https://i.postimg.cc/W4Znvrry/codepen.png" alt="codepen"/></a>
                    </div>
                    <div className="link">
                    <a><img src="https://i.postimg.cc/NjLfyjPB/email.png" alt="email"/></a>
                    </div>
                </div>
                </div>
                <div className="contact-form-wrapper">
                <form>
                    <div className="form-item">
                    <input type="text" name="sender" required/>
                    <label>Name:</label>
                    </div>
                    <div className="form-item">
                    <input type="text" name="email" required/>
                    <label>Email:</label>
                    </div>
                    <div className="form-item">
                    <textarea className="" name="message" required></textarea>
                    <label>Message:</label>
                    </div>
                    <button className="submit-btn">Send</button>  
                </form>
                </div>
            </div>
            </section>
            <Footer/>
        </div>
    );
};

export default ContactUs;