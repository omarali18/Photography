import React, { useEffect, useState } from 'react';
import "./Navbar.css"
import navLogo from '../../../images/shortImg/topLogo.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
    
    const activePhoneNav = e => {
        const navList = document.getElementById('navList');
        const open = document.querySelector('.open');
        const close = document.querySelector('.close');
        console.log(open, close, navList);
        navList.classList.toggle('active');
        open.classList.toggle('active');
        close.classList.toggle('active');
    }
    return (
        <div>
            <header>
                <div className="container">
                    <nav className="navbar">
                        <a href="index.html" className="logo">
                        <img src={navLogo} alt="logo" style={{width:'150px'}} />
                        </a>
                        <ul className="nav_list" id="navList">
                            <li className="nav_list-item">
                                <Link className="nav_list-link" to={`/`}>Home</Link>
                            </li>
                            <li className="nav_list-item">
                                <Link className="nav_list-link" to={`/about`}>About us</Link>
                            </li>
                            <li className="nav_list-item">
                                <Link className="nav_list-link" to={`/contact`}>Contact us</Link>
                            </li>
                        </ul>
                        <a href="index.html" className="btn btn-black">Get an invite</a>

                    <button className="menu_toggle" onClick={activePhoneNav}>
                        <svg height="6" width="20" xmlns="http://www.w3.org/2000/svg" className="open">
                            <g fillRule="evenodd">
                                <path d="M0 0h20v1H0zM0 5h20v1H0z"></path>
                            </g>
                        </svg>
                        <svg height="15" width="16" xmlns="http://www.w3.org/2000/svg" className="close">
                            <path
                                d="M14.718.075l.707.707L8.707 7.5l6.718 6.718-.707.707L8 8.207l-6.718 6.718-.707-.707L7.293 7.5.575.782l.707-.707L8 6.793 14.718.075z"
                                fillRule="evenodd"></path>
                        </svg>
                </button>
                    </nav>
                </div>
            </header>
        </div>
    );
};

export default Navbar;