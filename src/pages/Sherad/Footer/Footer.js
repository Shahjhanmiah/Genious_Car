import React from 'react';
import logo from '../../../assets/logo.svg'
import './Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-32 bg-base-200 text-white">
                <div>
                    <img src={logo}></img>
                </div>
                <div className='half'>

                    <a href='https://www.facebook.com/profile.php?id=100089590305979&mibextid=ZbWKwL'>
                    <i className='icon' class="fa-brands fa-facebook"></i>
                    </a>
                    <i class="fa-brands fa-whatsapp"></i>
                </div>

                <div>
                    <span className="footer-title">Services</span>
                    <a herf="/" className="link link-hover">Branding</a>
                    <a herf="/" className="link link-hover">Design</a>
                    <a herf="/" className="link link-hover">Marketing</a>
                    <a herf="/" className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a herf="/" className="link link-hover">About us</a>
                    <a herf="/" className="link link-hover">Contact</a>
                    <a herf="/" className="link link-hover">Jobs</a>
                    <a herf="/" className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a herf="/" className="link link-hover">Terms of use</a>
                    <a herf="/" className="link link-hover">Privacy policy</a>
                    <a herf="/" className="link link-hover">Cookie policy</a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;